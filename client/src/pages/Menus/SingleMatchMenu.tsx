import { useState } from 'react';
import MenuList from '../../components/MenuList.js';
import MenuListItem from '../../components/MenuListItem.js';
import {
  AbilityTier,
  abilityTiers,
  DifficultyLevel,
  difficultyLevels,
} from './../options.js';
import { useNavigate } from 'react-router-dom';
import { singleMatchTeamDraftRoute } from '../../routes.js';
import styled from 'styled-components';
import { Button } from '../../components/Button.js';

const unlockedTiers: Array<AbilityTier> = ['Village'];

export const SingleMatchMenu = () => {
  const navigate = useNavigate();
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<DifficultyLevel>('Medium');
  const [selectedTier, setSelectedTier] = useState<AbilityTier>('Village');

  const onDifficultySet = (difficulty: DifficultyLevel) =>
    setSelectedDifficulty(difficulty);

  const onTierSet = (tier: AbilityTier) => setSelectedTier(tier);

  const handleClickStartGame = () => {
    navigate(singleMatchTeamDraftRoute, {
      state: { tier: selectedTier, difficultyLevel: selectedDifficulty },
    });
  };

  const handleClickBack = () => navigate('/');

  const handleClickUseExistingTeam = () => {};

  return (
    <>
      <h3>Single Match</h3>
      <h5>Settings</h5>
      <OptionsContainer>
        <MenuContainer>
          <MenuList heading="Difficulty">
            {difficultyLevels.map((level, index) => (
              <MenuListItem
                option={level}
                chooseOption={() => onDifficultySet(level)}
                selected={selectedDifficulty === level}
                key={index}
              />
            ))}
          </MenuList>
        </MenuContainer>
        <MenuContainer>
          <MenuList heading="Level">
            {abilityTiers.map((tier, index) => (
              <MenuListItem
                option={tier}
                chooseOption={() => onTierSet(tier)}
                selected={selectedTier === tier}
                disabled={!unlockedTiers.includes(tier)}
                key={index}
              />
            ))}
          </MenuList>
        </MenuContainer>
      </OptionsContainer>

      <ButtonContainer>
        <Button
          label="Use existing team?"
          onClick={handleClickUseExistingTeam}
          disabled
          size="Medium"
        />
        <Button
          label="Back"
          onClick={handleClickBack}
          size="Medium"
          role="link"
        />
        <Button
          label="Start Game"
          size="Medium"
          onClick={handleClickStartGame}
          role="link"
        />
      </ButtonContainer>
    </>
  );
};

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const MenuContainer = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
