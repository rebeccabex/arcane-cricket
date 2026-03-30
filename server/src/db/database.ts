import Database from 'better-sqlite3';

export const database = new Database('arcane-cricket.db');

database.pragma('journal_mode = WAL');

database.exec(`
  CREATE TABLE IF NOT EXISTS classes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL
  )
`);