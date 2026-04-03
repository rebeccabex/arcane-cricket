import { useEffect, useState } from 'react';
import { Player } from '../types';
import { getPlayersForDrafting } from '../api';

export const TeamDraft = () => {
  const [team, setTeam] = useState({});
  const [playersForDrafting, setPlayersForDrafting] = useState<Array<Player>>(
    [],
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPlayersForDrafting();
      setPlayersForDrafting(response.data);
    };

    fetchData();
  }, []);

  return <>Pick your team!</>;
};
