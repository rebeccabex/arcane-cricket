export type Page = Menus | MatchScreens;

export type Menus =
  | 'MainMenu'
  | 'SingleMatchMenu'
  | 'CampaignMenu'
  | 'OptionsMenu';

export type MatchScreens = 'TeamDraft';
