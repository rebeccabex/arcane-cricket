import { useEffect, useState } from 'react';
import { apiCall } from './api';
import './App.css';
import styled from 'styled-components';
import { MainMenu } from './pages/MainMenu';
import { SingleMatchMenu } from './pages/SingleMatchMenu';
import { Page } from './types';

const App = () => {
  const [loadMessage, setLoadMessage] = useState('');
  const [pageToDisplay, setPageToDisplay] = useState<Page>('MainMenu');

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiCall();
      setLoadMessage(response.data);
    };

    fetchData();
  }, []);

  const selectPage = (page: Page) => setPageToDisplay(page);
  const goToMainMenu = () => setPageToDisplay('MainMenu');

  const getPageToDisplay = () => {
    switch (pageToDisplay) {
      case 'MainMenu':
        return <MainMenu selectPage={selectPage} />;
      case 'SingleMatchMenu':
        return <SingleMatchMenu returnToMainMenu={goToMainMenu} />;
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
