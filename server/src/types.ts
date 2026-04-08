export const difficultyLevels = Array<string>(
  'Easy',
  'Medium',
  'Hard',
  'Expert',
);
export type DifficultyLevel = (typeof difficultyLevels)[number];

export const abilityTiers = Array<string>(
  'Village',
  'District',
  'County',
  'National',
  'International',
);
export type AbilityTier = (typeof abilityTiers)[number];
