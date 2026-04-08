import { useEffect, useState } from 'react';
import { Player } from '../../types.js';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { getPlayersForDrafting } from '../../api.js';

export const TeamDraft = () => {
  const { state } = useLocation();
  const [team, setTeam] = useState({});
  const [playersForDrafting, setPlayersForDrafting] =
    useState<Array<Player> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPlayersForDrafting(
        state.difficultyLevel,
        state.tier,
      );
      setPlayersForDrafting(response.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Heading>Pick your team!</Heading>
      <DraftTable>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Level</th>
            <th>Class</th>
            <th>Sel?</th>
          </tr>
        </thead>
        <tbody>
          {playersForDrafting?.map((player, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{`${player.forename} ${player.surname}`}</td>
              <td>{player.level}</td>
              <td>{player.class}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </DraftTable>
    </>
  );
};

const Heading = styled.div``;

const DraftTable = styled.table``;
