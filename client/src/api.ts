import axios from 'axios';
import { AbilityTier, DifficultyLevel } from './pages/options';

const serverDomain = 'http://localhost:8080';
const createURL = (path: string) => `${serverDomain}/${path}`;

export const getRequest = async (route: string) =>
  await axios.get(createURL(route)).then((response) => response);

export const postRequest = async (
  route: string,
  params: { difficultyLevel: DifficultyLevel; tier: AbilityTier },
) => await axios.post(createURL(route), params).then((response) => response);

export const getPlayersForDrafting = async (
  difficultyLevel: DifficultyLevel,
  tier: AbilityTier,
) =>
  await postRequest('generate-draft-players', {
    difficultyLevel,
    tier,
  });
