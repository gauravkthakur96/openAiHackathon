// Mock backend for the JharERA portal prototype.
//
// This is a synthetic, in-memory-plus-JSON-file service built for a hackathon
// demo. It does not connect to any real government system. Treat every
// response as fictional data.

const express = require('express');
const cors = require('cors');
const path = require('path');
const { db, persist } = require('./db');

const PORT = process.env.PORT || 5175;
const ROOT = path.join(__dirname, '..');
const APP_FILE = path.join(ROOT, 'JharERA Portal.dc.html');
const app = express();
app.use(cors());
app.use(express.json({ limit: '2mb' }));

// Static assets the frontend loads directly.
app.use('/assets', express.static(path.join(ROOT, 'assets')));
app.use('/vendor', express.static(path.join(ROOT, 'vendor')));
app.use('/_ds', express.static(path.join(ROOT, '_ds')));
app.get('/support.js', (req, res) => res.sendFile(path.join(ROOT, 'support.js')));

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function formatDate(d) {
  return `${String(d.getDate()).padStart(2, '0')} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}
function isoDate(d) {
  return d.toISOString().slice(0, 10);
}
function addDays(d, n) {
  const copy = new Date(d);
  copy.setDate(copy.getDate() + n);
  return copy;
}
function daysBetween(a, b) {
  return Math.max(0, Math.round((b - a) / 86400000));
}
function pad5(n) {
  return String(n).padStart(5, '0');
}

// ---- Reference data -------------------------------------------------

app.get('/api/bootstrap', (req, res) => {
  res.json({
    projects: db.projects,
    docs: db.docs,
    notices: db.notices,
    leadership: db.leadership,
    agents: db.agents,
    orders: db.orders,
    laws: db.laws,
    forms: db.forms
  });
});

app.get('/api/projects/:id', (req, res) => {
  const project = db.projects.find(p => p.id === req.params.id);
  if (!project) return res.status(404).json({ error: 'Project not found' });
  res.json(project);
});

// ---- Auth (mock — accepts any identifier/OTP) ------------------------

const CITIZEN_NAMES = ['Sunita Devi', 'Ramesh Prasad', 'Anita Kumari', 'Vikram Oraon', 'Pooja Mahto'];

app.post('/api/auth/login', (req, res) => {
  const { role, identifier } = req.body || {};
  const token = 'mock-' + Math.random().toString(36).slice(2, 12);
  const citizenId = 'citizen-' + Math.random().toString(36).slice(2, 10);
  const name = CITIZEN_NAMES[Math.floor(Math.random() * CITIZEN_NAMES.length)];
  res.json({
    token,
    citizenId,
    profile: {
      name: role === 'promoter' || role === 'agent' || role === 'officer' ? (identifier || 'Authorised user') : name,
      role: role || 'citizen',
      identifier: identifier || '',
      verified: true
    }
  });
});

// ---- Complaints -------------------------------------------------------

function toQueueRow(c) {
  const filed = new Date(c.filedDate);
  const ageDays = c.ageDays != null ? c.ageDays : daysBetween(filed, new Date());
  return {
    id: c.caseNumber,
    ageDays,
    age: ageDays === 0 ? 'Today' : `${ageDays} days`,
    against: c.against,
    awaiting: c.status,
    tag: c.status === 'Hearing fixed' ? 'tag-accent' : c.status === 'Disposed' ? 'tag-neutral' : 'tag-outline'
  };
}

app.get('/api/complaints', (req, res) => {
  const { citizenId } = req.query;
  let list = db.complaints;
  if (citizenId) list = list.filter(c => c.citizenId === citizenId);
  res.json(list.map(c => ({
    caseNumber: c.caseNumber, status: c.status, filedDate: c.filedDate, against: c.against, bench: c.bench
  })));
});

app.get('/api/complaints/:caseNumber', (req, res) => {
  const complaint = db.complaints.find(c => c.caseNumber === req.params.caseNumber.trim());
  if (!complaint) return res.status(404).json({ error: 'No complaint found with that case number.' });
  res.json(complaint);
});

app.post('/api/complaints', (req, res) => {
  const body = req.body || {};
  const now = new Date();
  const caseNumber = `JH/CMP/${now.getFullYear()}/${pad5(db.nextCaseSeq)}`;
  db.nextCaseSeq += 1;

  const against = (body.respondents && body.respondents[0] && body.respondents[0].entityName) || 'Respondent';
  const bench = db.nextCaseSeq % 2 === 0 ? 'Bench I, Ranchi' : 'Bench II, Ranchi';
  const filedDateObj = now;
  const scrutinyBy = addDays(filedDateObj, 7);

  const complaint = {
    caseNumber,
    citizenId: body.citizenId || 'anonymous',
    status: 'Scrutiny pending',
    statusHeadline: `Filed — scrutiny expected by ${formatDate(scrutinyBy)}`,
    statusNote: `Your papers are being checked against Rule 36. You will get an SMS at every stage of ${caseNumber}.`,
    filedDate: isoDate(filedDateObj),
    bench,
    against,
    ageDays: 0,
    medianDays: 61,
    complainants: body.complainants || [],
    respondents: body.respondents || [],
    disputeDetails: body.disputeDetails || {},
    legalDeclarations: body.legalDeclarations || {},
    verification: body.verification || {},
    paymentDetails: body.paymentDetails || {},
    enclosures: body.enclosures || [],
    timeline: [
      {
        date: formatDate(filedDateObj),
        title: 'Complaint filed',
        body: 'Received online with the documents you attached. Fee of ₹1,000 paid.',
        doc: `Acknowledgement ${caseNumber}`
      }
    ]
  };

  db.complaints.push(complaint);
  persist();

  res.status(201).json({
    caseNumber,
    filedDate: formatDate(filedDateObj),
    scrutinyBy: formatDate(scrutinyBy),
    bench
  });
});

// ---- Promoter project registration ------------------------------------

app.post('/api/promoters', (req, res) => {
  const now = new Date();
  const regNumber = `JHARERA/P/APP/${now.getFullYear()}/${pad5(db.nextPromoterSeq)}`;
  db.nextPromoterSeq += 1;
  const application = {
    referenceNumber: regNumber,
    submittedOn: isoDate(now),
    payload: req.body || {}
  };
  db.promoterApplications.push(application);
  persist();
  res.status(201).json({ referenceNumber: regNumber, submittedOn: formatDate(now) });
});

// ---- Agent registration ------------------------------------------------

app.post('/api/agents/apply', (req, res) => {
  const now = new Date();
  const regNumber = `JHARERA/A/APP/${now.getFullYear()}/${pad5(db.nextAgentSeq)}`;
  db.nextAgentSeq += 1;
  const application = {
    referenceNumber: regNumber,
    submittedOn: isoDate(now),
    payload: req.body || {}
  };
  db.agentApplications.push(application);
  persist();
  res.status(201).json({ referenceNumber: regNumber, submittedOn: formatDate(now) });
});

// ---- Officer queue ------------------------------------------------------

app.get('/api/officer/queue', (req, res) => {
  const fromComplaints = db.complaints
    .filter(c => c.status !== 'Disposed')
    .map(toQueueRow);
  const combined = [...fromComplaints, ...db.queueExtra.map(q => ({ ...q, age: q.ageDays === 0 ? 'Today' : `${q.ageDays} days` }))];
  combined.sort((a, b) => b.ageDays - a.ageDays);
  res.json(combined);
});

// ---- Frontend (SPA fallback) --------------------------------------------
// Any path that isn't an API route or a static asset is a client-side route
// (e.g. /dashboard, /complaints/new) — serve the app shell and let its own
// router pick the right screen from the URL.
app.get(/^\/(?!api\/).*/, (req, res) => {
  res.sendFile(APP_FILE);
});

app.listen(PORT, () => {
  console.log(`JharERA mock backend listening on http://localhost:${PORT}`);
  console.log('All data is synthetic. No real government system is connected.');
});
