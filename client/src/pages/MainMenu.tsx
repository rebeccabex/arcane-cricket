import styled from 'styled-components';

export const MainMenu = () => (
  <>
    <Banner>
      <h1>Welcome to Arcane Cricket League</h1>
      <p>Where Cricket meets Magic!</p>
    </Banner>
    <Menu>
      <MenuOption disabled>Single Match</MenuOption>
      <MenuOption disabled>Campaign</MenuOption>
      <MenuOption disabled>Options</MenuOption>
    </Menu>
  </>
);

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
  color: ${(props) => (props.disabled ? '#3e4043' : '#9ca3af')};
`;
