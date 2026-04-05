import { useEffect, useState } from 'react';
import { Player } from '../../types.js';
import { getPlayersForDrafting } from '../../api.js';
import styled from 'styled-components';

export const TeamDraft = () => {
  const [team, setTeam] = useState({});
  const [playersForDrafting, setPlayersForDrafting] = useState<Array<Player>>(
    [],
  );

  useEffect(() => {
    console.log('fetch players for drafting');
    const fetchData = async () => {
      const response = await getPlayersForDrafting();
      setPlayersForDrafting(response.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Heading>Pick your team!</Heading>
      <DraftTable>
        <tr>
          <th>Name</th>
          <th>Level</th>
          <th>Class</th>
        </tr>
        {playersForDrafting.map((player) => (
          <tr>
            <td>{`${player.forename} ${player.surname}`}</td>
            <td>{player.level}</td>
            <td>{player.class}</td>
          </tr>
        ))}
      </DraftTable>
    </>
  );
};

const Heading = styled.div``;

const DraftTable = styled.table``;
