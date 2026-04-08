import { Database } from 'better-sqlite3';
import { NameGender, nameGenders, namesFile, Player } from '../models/types.js';
import {
  chooseFromArray,
  chooseFromArrayWithWeighting,
} from '../helpers/randomHelpers.js';
import { DifficultyLevel } from '../types.js';
import { parseJsonFile } from '../helpers/fileHelpers.js';

const playersPerLevel: { [string: DifficultyLevel]: number } = {
  Easy: 20,
  Medium: 15,
  Hard: 10,
  Expert: 5,
};

const names_filename = '../../resources/names.json';

const generateGender = (): NameGender => {
  const gender = chooseFromArrayWithWeighting<NameGender>(
    nameGenders,
    [45, 45, 10],
  );
  if (!nameGenders.includes(gender as NameGender)) {
    throw new Error(`Invalid gender: ${gender}`);
  }
  return gender as NameGender;
};
const generateFirstName = (names: namesFile) =>
  chooseFromArray(names.player_names.forenames[generateGender()]);

const generateSurname = (names: namesFile) =>
  chooseFromArray(names.player_names.surnames);

export const generatePlayers = (level: DifficultyLevel, db: Database) => {
  const classes = db.prepare('SELECT * FROM classes').all();
  const names = parseJsonFile<namesFile>(names_filename);

  const numberOfPlayersToGenerate = playersPerLevel[level];
  const availablePlayers = new Array<Player>();

  for (let i = 0; i < numberOfPlayersToGenerate; i++) {
    const newPlayer = {
      forename: generateFirstName(names),
      surname: generateSurname(names),
    } as Player;
    availablePlayers.push(newPlayer);
  }

  return availablePlayers;
};
