import Database from "better-sqlite3";

export const database = new Database("arcane-cricket.db");

database.pragma("journal_mode = WAL");

database.exec(`
  CREATE TABLE IF NOT EXISTS catgories(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
  )

  CREATE TABLE IF NOT EXISTS classes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category_id INTEGER NOT NULL,
    level INTEGER NOT NULL,
    FOREIGN_KEY (category_id)
      REFERENCES categories (id)
  )

  CREATE TABLE IF NOT EXISTS players(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    forename TEXT NOT NULL,
    surname TEXT NOT NULL,
    gender TEXT NOT NULL,
    class_id INTEGER NOT NULL,
    experience_pts INTEGER NOT NULL DEFAULT 0,
    abilities TEXT NOT NULL,
    FOREIGN_KEY (class_id)
      REFERENCES classes (id)
  )

  CREATE TABLE IF NOT EXISTS abilities(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL
  )

  CREATE TABLE IF NOT EXISTS player-abilities(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    player_id INTEGER NOT NULL,
    ability_id INTEGER NOT NULL,
    extra_info TEXT NOT NULL,
    FOREIGN KEY (player_id)
      REFERENCES players (id),
    FOREIGN KEY (ability_id)
      REFERENCES abilities (id)
  )
`);
