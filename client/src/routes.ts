import { createBrowserRouter } from 'react-router';
import Menus from './pages/Menus/Menus.js';
import { SingleMatchPage } from './pages/SingleMatch/SingleMatchPage.js';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Menus,
    children: [
      {
        path: 'singleMatch/',
        Component: SingleMatchPage,
        loader: ({ request, params }) =>
          fetch(`/api/show/${params.showId}.json`, {
            signal: request.signal,
          }),
      },
    ],
  },
]);
