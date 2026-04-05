export type Page = Menu | MatchScreen;

const menus = ['MainMenu', 'SingleMatchMenu', 'CampaignMenu', 'OptionsMenu'];

export type Menu = (typeof menus)[number];

const matchScreens = ['TeamDraft'];
export type MatchScreen = (typeof matchScreens)[number];

const pages = menus.concat(matchScreens);

export const isPage = (x: any): x is Page => pages.includes(x);
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
  forename: string;
  surname: string;
  gender: Gender;
  level: number;
  class: string;
  experiencePoints: number;
  stats: PlayerStats;
  abilityDice: PlayerAbilityDice;
  totalHitPoints: number;
  currentHitPoints: number;
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
