export const genders = ['F', 'M', 'X'];
export type Gender = (typeof genders)[number];

export const nameGenders = ['female', 'male', 'neutral'] as const;
export type NameGender = (typeof nameGenders)[number];

export type Die = 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20';

export const stats = [
  'Power',
  'Speed',
  'Guile',
  'Perception',
  'Constitution',
  'Leadership',
];
export type Stat = (typeof stats)[number];

export type PlayerStats = { [stat: Stat]: number };

export type PlayerAbilityDice = { [stat: Stat]: Die };

export type Player = {
  id: number;
  forename: string;
  surname: string;
  gender: Gender;
  level: number;
  experiencePoints: number;
  stats: PlayerStats;
  abilityDice: PlayerAbilityDice;
};

export type ClassCategory = {
  id: number;
  name: string;
};

export type PlayerClass = {
  id: number;
  name: string;
  category: string;
  level: number;
};

export type namesFile = {
  player_names: {
    forenames: {
      male: Array<string>;
      female: Array<string>;
      neutral: Array<string>;
    };
    surnames: Array<string>;
  };
};
