import { useState } from 'react';
import styled from 'styled-components';
import { MainMenu } from './pages/MainMenu';
import { SingleMatchMenu } from './pages/SingleMatchMenu';
import { isPage, Page } from './types';
import useLocalStorage from './hooks';

const App = () => {
  const [currentPage, setCurrentPage] = useLocalStorage<Page>(
    'currentPage',
    'MainMenu',
  );

  const updateCurrentPage = (page: Page) => {
    setCurrentPage(page);
  };

  const selectPage = (page: Page) => updateCurrentPage(page);
  const goToMainMenu = () => updateCurrentPage('MainMenu');
  const startMatch = () => updateCurrentPage('TeamDraft');

  const getPageToDisplay = () => {
    switch (currentPage) {
      case 'MainMenu':
        return <MainMenu selectPage={selectPage} />;
      case 'SingleMatchMenu':
        return (
          <SingleMatchMenu
            returnToMainMenu={goToMainMenu}
            startMatch={startMatch}
          />
        );
      case 'CampaignMenu':
      case 'OptionsMenu':
        return <></>;
    }
  };

  return (
    <>
      <MainPage>{getPageToDisplay()}</MainPage>
    </>
  );
};

const MainPage = styled.section`
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;
`;

export default App;
