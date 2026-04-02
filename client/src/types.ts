export type Page = Menu | MatchScreen;

const menus = ['MainMenu', 'SingleMatchMenu', 'CampaignMenu', 'OptionsMenu'];

export type Menu = (typeof menus)[number];

const matchScreens = ['TeamDraft'];
export type MatchScreen = (typeof matchScreens)[number];

const pages = menus.concat(matchScreens);

export const isPage = (x: any): x is Page => pages.includes(x);
