import { Database } from 'better-sqlite3';
import {
  Gender,
  genders,
  NameGender,
  nameGenders,
  namesFile,
  Player,
  PlayerClass,
} from '../models/types.js';
import {
  chooseFromArray,
  chooseFromArrayWithWeighting,
} from '../helpers/randomHelpers.js';
import { AbilityTier, DifficultyLevel } from '../types.js';
import { parseJsonFile } from '../helpers/fileHelpers.js';

const playersPerLevel: { [string: DifficultyLevel]: number } = {
  Easy: 20,
  Medium: 15,
  Hard: 10,
  Expert: 5,
};
const playerLevelsPerTier: {
  [string: AbilityTier]: { [number: number]: number };
} = {
  Village: {
    1: 90,
    2: 10,
  },
};

const names_filename = '../../resources/names.json';

const generateGender = (): Gender => {
  const gender = chooseFromArrayWithWeighting<Gender>(genders, [45, 45, 10]);
  if (!genders.includes(gender as Gender)) {
    throw new Error(`Invalid gender: ${gender}`);
  }
  return gender as Gender;
};

const generateNameGender = (gender: Gender): NameGender => {
  const weightings: { [string: Gender]: Array<number> } = {
    F: [90, 0, 10],
    M: [0, 90, 10],
    X: [25, 25, 50],
  };

  const nameGender = chooseFromArrayWithWeighting<NameGender>(
    nameGenders,
    weightings[gender],
  );
  if (!nameGenders.includes(nameGender as NameGender)) {
    throw new Error(`Invalid gender: ${nameGender}`);
  }
  return nameGender as NameGender;
};

const generateFirstName = (gender: Gender, names: namesFile) =>
  chooseFromArray(names.player_names.forenames[generateNameGender(gender)]);

const generateSurname = (names: namesFile) =>
  chooseFromArray(names.player_names.surnames);

const generateLevel = (tier: AbilityTier) =>
  Number.parseInt(
    chooseFromArrayWithWeighting(
      Object.keys(playerLevelsPerTier[tier]),
      Object.values(playerLevelsPerTier[tier]),
    ),
  );

const generateStats = () => {}; // TODO
const generateAbilityDice = () => {}; // TODO

export const generatePlayers = (
  level: DifficultyLevel,
  tier: AbilityTier,
  db: Database,
) => {
  const classes = db
    .prepare(
      'SELECT classes.id AS id, classes.name AS class, categories.name AS category, level FROM classes JOIN categories ON classes.category_id = categories.id',
    )
    .all() as Array<PlayerClass>;
  const names = parseJsonFile<namesFile>(names_filename);

  const numberOfPlayersToGenerate = playersPerLevel[level];
  const availablePlayers = new Array<Player>();

  for (let i = 0; i < numberOfPlayersToGenerate; i++) {
    const gender = generateGender();
    const playerLevel = generateLevel(tier);

    const newPlayer = {
      forename: generateFirstName(gender, names),
      surname: generateSurname(names),
      level: playerLevel,
    } as Player;
    availablePlayers.push(newPlayer);
  }

  return availablePlayers;
};
