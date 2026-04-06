import { useState } from 'react';
import { Player } from '../../types.js';
import styled from 'styled-components';
import { useLoaderData } from 'react-router-dom';

type LoaderData = {
  playersForDrafting: Array<Player>;
};

export const TeamDraft = () => {
  const [team, setTeam] = useState({});
  const { playersForDrafting } = useLoaderData() as LoaderData;

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
