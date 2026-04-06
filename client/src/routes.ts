import { createBrowserRouter } from 'react-router';
import Menus from './pages/Menus/Menus.js';
import { getPlayersForDrafting } from './api.js';
import { TeamDraft } from './pages/SingleMatch/TeamDraft.js';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Menus,
    children: [
      {
        path: 'teamDraft',
        Component: TeamDraft,
        loader: getPlayersForDrafting,
      },
    ],
  },
]);
