import { createBrowserRouter } from 'react-router';
import { getPlayersForDrafting } from './api.js';
import { TeamDraft } from './pages/SingleMatch/TeamDraft.js';
import { SingleMatchMenu } from './pages/Menus/SingleMatchMenu.js';
import { MainMenu } from './pages/Menus/MainMenu.js';

export const singleMatchRoute = 'single-match';

export const singleMatchMenuPath = 'menu';
export const teamDraftPath = 'team-draft';

const createRoute = (route: string, path: string) => `/${route}/${path}`;

export const singleMatchMenuRoute = createRoute(
  singleMatchRoute,
  singleMatchMenuPath,
);
export const singleMatchTeamDraftRoute = createRoute(
  singleMatchRoute,
  teamDraftPath,
);

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, Component: MainMenu },
      {
        path: singleMatchRoute,
        children: [
          {
            path: singleMatchMenuPath,
            Component: SingleMatchMenu,
          },
          {
            path: teamDraftPath,
            Component: TeamDraft,
            loader: getPlayersForDrafting,
          },
        ],
      },
    ],
  },
]);
