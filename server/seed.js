// Synthetic seed data for the JharERA mock backend.
// Every record here is fictional. Nothing in this file connects to a real
// government register, project, person or case.

const PROJECTS = [
  { id: 'p1', name: 'Vaishali Heights', promoter: 'Manglam Build-Developers Ltd.', promoterAddr: 'Main Road, Ranchi – 834001', promoterOther: '3 registered, 1 completed',
    district: 'Ranchi', locality: 'Kanke Road', reg: 'JHARERA/P/RAN/2023/000412', status: 'Registered', type: 'Apartments', units: 180, sold: 124, pct: 68,
    possession: 'Dec 2027', launch: 'Mar 2023', complaints: 1, validity: 'Valid till 31 Dec 2027',
    verdict: 'Registered and current', verdictNote: 'This project is on the Authority’s register and its registration has not expired. The promoter may legally advertise and sell units here.' },
  { id: 'p2', name: 'Green Acres Enclave', promoter: 'Srijan Realty Pvt. Ltd.', promoterAddr: 'Saraidhela, Dhanbad – 826004', promoterOther: '2 registered',
    district: 'Dhanbad', locality: 'Saraidhela', reg: 'JHARERA/P/DHN/2022/000287', status: 'Registered', type: 'Apartments', units: 224, sold: 210, pct: 92,
    possession: 'Mar 2027', launch: 'Aug 2022', complaints: 0, validity: 'Valid till 31 Mar 2027',
    verdict: 'Registered and current', verdictNote: 'On the register, no adverse orders. 92% built and reporting on schedule.' },
  { id: 'p3', name: 'Steel City Residency', promoter: 'Adityapur Homes Pvt. Ltd.', promoterAddr: 'Sonari, Jamshedpur – 831011', promoterOther: '1 registered',
    district: 'Jamshedpur', locality: 'Sonari', reg: 'JHARERA/P/JAM/2024/000531', status: 'Registered', type: 'Apartments', units: 96, sold: 38, pct: 31,
    possession: 'Jun 2029', launch: 'Jan 2024', complaints: 0, validity: 'Valid till 30 Jun 2029',
    verdict: 'Registered and current', verdictNote: 'Early-stage project. Registration is valid; construction is 31% complete against a 2029 possession date.' },
  { id: 'p4', name: 'Bokaro Sunrise Apartments', promoter: 'Ambey Constructions', promoterAddr: 'Sector 4, Bokaro Steel City – 827004', promoterOther: '1 registered, 1 lapsed',
    district: 'Bokaro', locality: 'Sector 4', reg: 'JHARERA/P/BOK/2021/000164', status: 'Lapsed', type: 'Apartments', units: 120, sold: 97, pct: 74,
    possession: 'Overdue since Dec 2025', launch: 'Feb 2021', complaints: 6, validity: 'Expired 30 Jun 2025',
    verdict: 'Registration has lapsed', verdictNote: 'The registration expired on 30 June 2025 and no extension has been granted. The promoter cannot legally market or sell units until it is revived. Existing buyers may claim interest for delay under Section 18.' },
  { id: 'p5', name: 'Deoghar Divine Residency', promoter: 'Shreeji Infra LLP', promoterAddr: 'Castairs Town, Deoghar – 814112', promoterOther: 'First project',
    district: 'Deoghar', locality: 'Castairs Town', reg: 'JHARERA/P/DEO/2024/000618', status: 'Registered', type: 'Plotted development', units: 64, sold: 9, pct: 12,
    possession: 'Dec 2028', launch: 'Nov 2024', complaints: 0, validity: 'Valid till 31 Dec 2028',
    verdict: 'Registered and current', verdictNote: 'Newly registered plotted development. Check that layout approval is on file before paying any booking amount.' },
  { id: 'p6', name: 'Hazaribagh Meadows', promoter: 'Lakhotia Developers Pvt. Ltd.', promoterAddr: 'Korrah, Hazaribagh – 825301', promoterOther: '2 registered, 1 suspended',
    district: 'Hazaribagh', locality: 'Korrah', reg: 'JHARERA/P/HAZ/2023/000455', status: 'Suspended', type: 'Villas', units: 48, sold: 31, pct: 44,
    possession: 'Overdue since Mar 2026', launch: 'May 2023', complaints: 11, validity: 'Suspended by order dated 14 Apr 2026',
    verdict: 'Registration suspended — do not pay',
    verdictNote: 'The Authority suspended this registration on 14 April 2026 for failure to file quarterly reports and diversion of buyer funds. Do not make any further payment. Existing buyers should read order JHRERA/O/2026/0117.' }
];

const DOCS = [
  { name: 'Approved layout plan', plain: 'the map the municipality approved', filed: '14 Mar 2023', status: 'On file', tagClass: 'tag-accent' },
  { name: 'Commencement certificate', plain: 'permission to start building', filed: '22 Mar 2023', status: 'On file', tagClass: 'tag-accent' },
  { name: 'Encumbrance certificate', plain: 'proof the land carries no loan or dispute', filed: '14 Mar 2023', status: 'On file', tagClass: 'tag-accent' },
  { name: 'Form 3 — engineer’s certificate', plain: 'an engineer confirming how much is built', filed: '12 Jul 2026', status: 'Current quarter', tagClass: 'tag-accent' },
  { name: 'Occupancy certificate', plain: 'permission for buyers to move in', filed: 'Not yet due', status: 'Pending', tagClass: 'tag-neutral' }
];

const NOTICES = [
  { date: '18 Aug 2026', title: 'Quarterly progress reports for Apr–Jun 2026 due by 31 August; late filing attracts penalty under Section 61', kind: 'Circular' },
  { date: '11 Aug 2026', title: 'Cause list for hearings from 25 to 29 August 2026 published', kind: 'Cause list' },
  { date: '04 Aug 2026', title: 'Registration of Hazaribagh Meadows suspended; buyers advised to withhold further payment', kind: 'Public notice' },
  { date: '29 Jul 2026', title: 'Revised fee schedule for project registration and extension, effective 1 September 2026', kind: 'Notification' },
  { date: '21 Jul 2026', title: 'Agent registration renewals may now be filed entirely online', kind: 'Circular' }
];

const LEADERSHIP = [
  { name: 'Mr. Sunil Kumar', role: 'Principal Secretary, Department of Urban Development and Housing', photo: './assets/official/leadership/sunil-kumar.jpg' },
  { name: 'Shri Ajay Kumar Singh', role: 'Chairman, JharERA', photo: './assets/official/leadership/ajay-kumar-singh.jpg' },
  { name: 'Shri Nalin Kumar', role: 'Member, JharERA', photo: './assets/official/leadership/nalin-kumar.jpg' }
];

const AGENTS = [
  { name: 'Rakesh Kumar Singh', firm: 'Singh Properties, Ranchi', reg: 'JHARERA/A/RAN/2022/001871', district: 'Ranchi', till: '31 Mar 2027', status: 'Registered', complaints: '0' },
  { name: 'Nirmala Prasad', firm: 'Nirmala Realty Services', reg: 'JHARERA/A/DHN/2023/002140', district: 'Dhanbad', till: '30 Sep 2028', status: 'Registered', complaints: '0' },
  { name: 'Imtiyaz Ahmed', firm: 'Steel City Estates', reg: 'JHARERA/A/JAM/2021/001402', district: 'Jamshedpur', till: 'Expired 31 Dec 2025', status: 'Lapsed', complaints: '2' },
  { name: 'Pawan Mahto', firm: 'Mahto Associates', reg: 'JHARERA/A/BOK/2024/002655', district: 'Bokaro', till: '31 Jul 2029', status: 'Registered', complaints: '0' },
  { name: 'Sanjay Kesri', firm: 'Deoghar Land Advisors', reg: 'JHARERA/A/DEO/2023/002011', district: 'Deoghar', till: 'Suspended 12 May 2026', status: 'Suspended', complaints: '5' }
];

const ORDERS = [
  { no: 'JHRERA/O/2026/0117', section: 'Section 7 — revocation', date: '14 Apr 2026', bench: 'Full Bench', parties: 'In re: Hazaribagh Meadows, Lakhotia Developers Pvt. Ltd.',
    headnote: 'Registration suspended for failure to file four consecutive quarterly reports and for withdrawal from the designated account without engineer and chartered-accountant certification. The promoter is restrained from accepting further payments; buyers already in occupation are protected.' },
  { no: 'JHRERA/O/2026/0092', section: 'Section 18 — delay', date: '02 Mar 2026', bench: 'Bench II, Ranchi', parties: 'Sunita Devi v. Ambey Constructions',
    headnote: 'Possession delayed by fourteen months beyond the agreement date. Promoter directed to pay interest at the State Bank of India marginal cost of funds rate plus two percent for the period of delay, and to hand over possession within ninety days.' },
  { no: 'JHRERA/O/2025/0416', section: 'Section 12 — false advertising', date: '19 Nov 2025', bench: 'Bench I, Ranchi', parties: 'Ashok Mahto v. Srijan Realty Pvt. Ltd.',
    headnote: 'Brochure promised a clubhouse and swimming pool absent from the sanctioned plan. Refund of the entire amount paid with interest allowed, together with costs of ₹25,000.' },
  { no: 'JHRERA/O/2025/0388', section: 'Section 11 — disclosure', date: '07 Oct 2025', bench: 'Full Bench', parties: 'Suo motu: 62 promoters, non-filing of quarterly reports',
    headnote: 'Penalty of ₹50,000 per quarter imposed on promoters who failed to upload quarterly progress reports. The Authority directs that non-filing beyond two quarters will attract proceedings for revocation.' }
];

const LAWS = [
  { kind: 'Central Act', title: 'Real Estate (Regulation and Development) Act, 2016', note: 'The parent law. Ninety-two sections covering registration, buyer rights, the Authority and the Appellate Tribunal.' },
  { kind: 'State Rules', title: 'Jharkhand Real Estate (Regulation and Development) Rules, 2017', note: 'How the Act is applied in Jharkhand: forms, fees, timelines and the interest rate payable on delay.' },
  { kind: 'Regulations', title: 'JharERA (General) Regulations, 2018', note: 'Procedure before the Authority — filing, service of notice, hearings, adjournments and orders.' },
  { kind: 'Plain guide', title: 'A homebuyer’s guide to RERA', note: 'Twelve pages, no legal language, in Hindi and English. What to check before booking and what to do when things go wrong.' },
  { kind: 'Plain guide', title: 'A promoter’s compliance calendar', note: 'Every filing a registered promoter owes the Authority, month by month, with the penalty for missing it.' },
  { kind: 'Notification', title: 'Fee schedule, effective 1 September 2026', note: 'Registration, extension, agent registration, complaint and appeal fees in one table.' }
];

const FORMS = [
  { name: 'Form A', purpose: 'Application for project registration', who: 'Promoter', fee: 'By plot area' },
  { name: 'Form B', purpose: 'Declaration on stamp paper', who: 'Promoter', fee: 'Nil' },
  { name: 'Form G', purpose: 'Application for agent registration', who: 'Agent', fee: '₹10,000 individual' },
  { name: 'Form M', purpose: 'Complaint to the Authority', who: 'Buyer, promoter or agent', fee: '₹1,000' },
  { name: 'Form N', purpose: 'Appeal to the Appellate Tribunal', who: 'Any aggrieved party', fee: '₹5,000' }
];

// One seeded, already-progressed complaint so "Track a complaint" has a
// realistic case to demo (JH/CMP/2026/00418) alongside anything a visitor
// files themselves through the wizard.
const SEED_COMPLAINTS = [
  {
    caseNumber: 'JH/CMP/2026/00418',
    citizenId: 'seed-demo',
    status: 'Hearing fixed',
    statusHeadline: 'Hearing fixed for 27 August 2026',
    statusNote: 'Bench II, Ranchi · 11:30 AM · Item 14 on the cause list. You may attend in person or join the video link sent by SMS.',
    filedDate: '2026-02-02',
    bench: 'Bench II, Ranchi',
    against: 'Ambey Constructions',
    medianDays: 61,
    ageDays: 201,
    complainants: [{ isPrimary: true, fullName: 'Sunita Devi', relationType: 'Spouse', relativeName: 'Ramesh Prasad', age: 41,
      mobileNumber: '9876543210', emailId: 'sunita.devi@example.com', addressLine1: 'Flat 604, Bokaro Sunrise Apartments', district: 'Bokaro', pincode: '827004' }],
    respondents: [{ respondentType: 'Promoter/Builder', reraRegistrationNumber: 'JHARERA/P/BOK/2021/000164', entityName: 'Ambey Constructions',
      contactPerson: 'Site office', mobileNumber: '9123456780', addressLine1: 'Sector 4, Bokaro Steel City', district: 'Bokaro', pincode: '827004' }],
    disputeDetails: {
      issueCategories: ['DELAYED_POSSESSION'],
      unitDetails: { unitOrFlatNumber: 'Flat 604', towerOrBlock: 'Tower B', carpetAreaSqFt: 980 },
      totalConsiderationValue: 4200000, totalAmountPaid: 3900000,
      agreementDate: '2021-03-14', committedPossessionDate: '2025-12-31',
      factsOfTheCase: 'Possession was promised by December 2025. The building remains incomplete and the promoter has not responded to written requests since April 2026.',
      reliefsSought: [{ reliefType: 'INTEREST_ON_DELAY', claimedAmount: null, description: 'Interest for every month of delay from the committed possession date' }]
    },
    enclosures: [
      { documentType: 'ALLOTMENT_LETTER', originalFileName: 'allotment-letter.pdf' },
      { documentType: 'PAYMENT_RECEIPTS', originalFileName: 'payment-receipts-11.pdf' }
    ],
    paymentDetails: { mode: 'ONLINE_GATEWAY', feeAmount: 1000, gatewayTransactionId: 'MOCKPAY-0002914' },
    timeline: [
      { date: '02 Feb 2026', title: 'Complaint filed', body: 'Received online with the booking agreement and eleven payment receipts. Fee of ₹1,000 paid.', doc: 'Acknowledgement JH/CMP/2026/00418' },
      { date: '09 Feb 2026', title: 'Papers checked and case admitted', body: 'The registry found the complaint complete. Nothing further was required from you.', doc: '' },
      { date: '21 Feb 2026', title: 'Notice issued to Ambey Constructions', body: 'The promoter was given thirty days to file a reply.', doc: 'Notice dated 21 Feb 2026' },
      { date: '14 Apr 2026', title: 'Promoter filed a reply', body: 'The promoter admitted the delay and attributed it to a sand shortage and a labour strike. A copy was sent to you by email.', doc: 'Reply of the promoter' },
      { date: '12 Jun 2026', title: 'First hearing held', body: 'Both sides were heard. The bench directed the promoter to produce the designated-account statement for the last two years.', doc: 'Order sheet, 12 Jun 2026' },
      { date: '27 Aug 2026', title: 'Next hearing — arguments on relief', body: 'The bench will hear what relief you are entitled to. You may attend in person at Nepal House or join the video link.', doc: '' }
    ]
  }
];

const SEED_QUEUE_EXTRA = [
  { id: 'JH/CMP/2025/02914', ageDays: 318, against: 'Lakhotia Developers', awaiting: 'Order to be written', tag: 'tag-outline' },
  { id: 'JH/CMP/2026/00502', ageDays: 174, against: 'Ambey Constructions', awaiting: 'Promoter reply overdue', tag: 'tag-outline' },
  { id: 'JH/CMP/2026/00611', ageDays: 88, against: 'Shreeji Infra LLP', awaiting: 'Scrutiny', tag: 'tag-neutral' },
  { id: 'JH/CMP/2026/00688', ageDays: 34, against: 'Manglam Build-Developers', awaiting: 'Notice to issue', tag: 'tag-neutral' }
];

function freshDatabase() {
  return {
    projects: PROJECTS,
    docs: DOCS,
    notices: NOTICES,
    leadership: LEADERSHIP,
    agents: AGENTS,
    orders: ORDERS,
    laws: LAWS,
    forms: FORMS,
    complaints: SEED_COMPLAINTS.map(c => ({ ...c })),
    queueExtra: SEED_QUEUE_EXTRA,
    promoterApplications: [],
    agentApplications: [],
    nextCaseSeq: 712,
    nextPromoterSeq: 1,
    nextAgentSeq: 1
  };
}

module.exports = { freshDatabase };
