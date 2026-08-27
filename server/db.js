// Tiny JSON-file "database" for the mock backend. No real database is
// involved — data.json is written to disk on every mutation so a filed
// complaint or registration survives a server restart during a demo.

const fs = require('fs');
const path = require('path');
const { freshDatabase } = require('./seed');

const FILE = path.join(__dirname, 'data.json');

function load() {
  if (fs.existsSync(FILE)) {
    try {
      return JSON.parse(fs.readFileSync(FILE, 'utf8'));
    } catch (err) {
      console.warn('data.json was unreadable, reseeding:', err.message);
    }
  }
  const seeded = freshDatabase();
  save(seeded);
  return seeded;
}

function save(db) {
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
}

const db = load();

function persist() {
  save(db);
}

module.exports = { db, persist };
