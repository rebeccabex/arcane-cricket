import { useState } from 'react';
import MenuList from '../../components/MenuList.js';
import MenuListItem from '../../components/MenuListItem.js';
import {
  AbilityTier,
  abilityTiers,
  DifficultyLevel,
  difficultyLevels,
} from './../options.js';
import { NavLink, useNavigate } from 'react-router-dom';
import { singleMatchTeamDraftRoute } from '../../routes.js';

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

  return (
    <>
      <h3>Single Match</h3>
      <h5>Settings</h5>
      <button disabled>Use existing team?</button>
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

      <NavLink to="/" end>
        Back
      </NavLink>
      <button onClick={handleClickStartGame}>Start Game</button>
    </>
  );
};
