import axios from 'axios';

export const getRequest = async (route: string) =>
  await axios
    .get(`http://localhost:8080/${route}`)
    .then((response) => response);

export const getPlayersForDrafting = async () =>
  await getRequest('generate-draft-players');
