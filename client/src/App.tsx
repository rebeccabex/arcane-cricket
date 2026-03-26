import React, { useEffect, useState } from 'react';
import { apiCall } from './api';
import './App.css'
import styled from 'styled-components';

const App = () => {
  const [loadMessage, setLoadMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiCall();
      setLoadMessage(response.data);
    }
    
    fetchData();
  }, [])

  return (
    <>
      <MainPage>
        <Banner>
          <h1>Welcome to Arcane Cricket League</h1>
          <p>
            Where Cricket meets Magic!
          </p>
          <p>
            {loadMessage}
          </p>
        </Banner>
        <Menu>
          <MenuOption disabled>Single Match</MenuOption>
          <MenuOption disabled>Campaign</MenuOption>
          <MenuOption disabled>Options</MenuOption>
        </Menu>
      </MainPage>
    </>
  )
}

const MainPage = styled.section`
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;
`;

const Banner = styled.div`
  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
`;

const Menu = styled.ul`
  list-style-type: none;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
`;

const MenuOption = styled.li<{ disabled?: boolean }>`
  color: ${props => props.disabled ? "#3e4043" : "#9ca3af" }
`;


export default App
