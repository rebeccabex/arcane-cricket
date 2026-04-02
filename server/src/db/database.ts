import Database from 'better-sqlite3';

export const database = new Database('arcane-cricket.db');

database.pragma('journal_mode = WAL');

database.exec(`
  CREATE TABLE IF NOT EXISTS categories(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS classes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category_id INTEGER NOT NULL,
    level INTEGER NOT NULL,
    FOREIGN_KEY (category_id)
      REFERENCES categories (id)
  );

  CREATE TABLE IF NOT EXISTS leagues(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    tier TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS teams(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    is_user_created INTEGER,
    current_league_id INT NOT NULL,
    FOREIGN_KEY (current_league_id)
      REFERENCES leagues (id)
  );

  CREATE TABLE IF NOT EXISTS players(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    forename TEXT NOT NULL,
    surname TEXT NOT NULL,
    gender TEXT NOT NULL,
    team_id INTEGER NOT NULL,
    class_id INTEGER NOT NULL,
    experience_pts INTEGER NOT NULL DEFAULT 0,
    abilities TEXT NOT NULL,
    power_die INTEGER NOT NULL DEFAULT 4,
    speed_die INTEGER NOT NULL DEFAULT 4,
    guile_die INTEGER NOT NULL DEFAULT 4,
    perception_die INTEGER NOT NULL DEFAULT 4,
    constitution_die INTEGER NOT NULL DEFAULT 4,
    leadership_die INTEGER NOT NULL DEFAULT 4,
    power_bonus INTEGER NOT NULL DEFAULT 0,
    speed_bonus INTEGER NOT NULL DEFAULT 0,
    guile_bonus INTEGER NOT NULL DEFAULT 0,
    perception_bonus INTEGER NOT NULL DEFAULT 0,
    constitution_bonus INTEGER NOT NULL DEFAULT 0,
    leadership_bonus INTEGER NOT NULL DEFAULT 0,
    FOREIGN_KEY (team_id)
      REFERENCES teams (id),
    FOREIGN_KEY (class_id)
      REFERENCES classes (id)
  );

  CREATE TABLE IF NOT EXISTS abilities(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS player-abilities(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    player_id INTEGER NOT NULL,
    ability_id INTEGER NOT NULL,
    extra_info TEXT NOT NULL,
    FOREIGN KEY (player_id)
      REFERENCES players (id),
    FOREIGN KEY (ability_id)
      REFERENCES abilities (id)
  );
`);
