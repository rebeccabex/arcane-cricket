import axios from 'axios';
import { DifficultyLevel } from './pages/options';

const serverDomain = 'http://localhost:8080';
const createURL = (path: string) => `${serverDomain}/${path}`;

export const getRequest = async (route: string) =>
  await axios.get(createURL(route)).then((response) => response);

export const postRequest = async (
  route: string,
  params: { difficultyLevel: DifficultyLevel },
) => await axios.post(createURL(route), params).then((response) => response);

export const getPlayersForDrafting = async (difficultyLevel: DifficultyLevel) =>
  await postRequest('generate-draft-players', {
    difficultyLevel: difficultyLevel,
  });
