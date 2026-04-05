import { useState } from 'react';
import { TeamDraft } from './TeamDraft.js';

export const SingleMatchPage = () => {
  const [pageToDisplay, setPageToDisplay] = useState('TeamDraft');

  return <TeamDraft />;
};
