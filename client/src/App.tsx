import React, { useEffect, useState } from 'react';
import { apiCall } from './api';
import './App.css';
import styled from 'styled-components';
import { MainMenu } from './pages/MainMenu';

const App = () => {
  const [loadMessage, setLoadMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiCall();
      setLoadMessage(response.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <MainPage>
        <MainMenu />
      </MainPage>
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
