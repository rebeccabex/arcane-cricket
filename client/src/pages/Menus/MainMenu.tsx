import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { singleMatchMenuRoute } from '../../routes';

export const MainMenu = () => (
  <Page>
    <Banner>
      <h1>Welcome to Arcane Cricket League</h1>
      <p>Where Cricket meets Magic!</p>
    </Banner>
    <Menu>
      <MenuOption to={singleMatchMenuRoute}>Single Match</MenuOption>
      <MenuOption to="" disabled end>
        Campaign
      </MenuOption>
      <MenuOption to="" disabled end>
        Options
      </MenuOption>
    </Menu>
  </Page>
);

const Page = styled.section`
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
  display: flex;
  flex-direction: column;
  list-style-type: none;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
`;

const MenuOption = styled(NavLink)<{ disabled?: boolean }>`
  color: ${(props) => (props.disabled ? '#3e4043' : '#9ca3af')};
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
`;
