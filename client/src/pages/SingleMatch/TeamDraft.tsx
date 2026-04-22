import { useEffect, useState } from 'react';
import { Player } from '../../types.js';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { getPlayersForDrafting } from '../../api.js';
import { Button } from '../../components/Button.js';
import { singleMatchMenuRoute } from '../../routes.js';

export const TeamDraft = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [team, setTeam] = useState<Array<Player>>([]);
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

  const addPlayerToTeam = (player: Player) => setTeam([...team, player]);

  const removePlayerFromTeam = (player: Player) =>
    team.splice(team.indexOf(player));

  const viewPlayer = (player: Player) => {};

  const handleClickBack = () => navigate(singleMatchMenuRoute);

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
            <th>Selected?</th>
            <th>View details</th>
          </tr>
        </thead>
        <tbody>
          {playersForDrafting?.map((player, index) => (
            <TableRow
              key={index}
              onClick={() => viewPlayer(player)}
              $row={index + 1}
            >
              <td>{index + 1}</td>
              <td>{`${player.forename} ${player.surname}`}</td>
              <td>{player.level}</td>
              <td>{player.class}</td>
              <td>{team.includes(player) && 'Y'}</td>
              <td>
                {team.includes(player) ? (
                  <button onClick={() => removePlayerFromTeam(player)}>
                    Deselect
                  </button>
                ) : (
                  <button onClick={() => addPlayerToTeam(player)}>
                    Select
                  </button>
                )}
              </td>
            </TableRow>
          ))}
        </tbody>
      </DraftTable>

      <div>Assigned {team.length} out of 11</div>

      <ButtonContainer>
        <Button label="Back" onClick={handleClickBack} />
        <Button label="Auto assign" disabled />
        <Button label="Continue" disabled={team.length !== 11} />
      </ButtonContainer>
    </>
  );
};

const Heading = styled.h3``;

const DraftTable = styled.table``;

const TableRow = styled.tr<{ $row: number }>`
  background-color: ${({ $row }) =>
    $row / 2 === Math.floor($row / 2) ? '#222222' : '#444444'};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
