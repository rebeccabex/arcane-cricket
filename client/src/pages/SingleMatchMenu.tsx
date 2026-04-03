import { useState } from 'react';
import MenuList from '../components/MenuList';
import MenuListItem from '../components/MenuListItem';
import {
  AbilityTier,
  abilityTiers,
  DifficultyLevel,
  difficultyLevels,
} from './options';

type Props = {
  returnToMainMenu: () => void;
  startMatch: () => void;
};

export const SingleMatchMenu = ({ returnToMainMenu, startMatch }: Props) => {
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<DifficultyLevel>('Medium');
  const [selectedTier, setSelectedTier] = useState<AbilityTier>('Village');

  const onDifficultySet = (difficulty: DifficultyLevel) =>
    setSelectedDifficulty(difficulty);

  const onTierSet = (tier: AbilityTier) => setSelectedTier(tier);

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
            key={index}
          />
        ))}
      </MenuList>

      <button onClick={returnToMainMenu}>Back</button>
      <button onClick={startMatch}>Start</button>
    </>
  );
};
