import styled from "styled-components";

type Props = {
  heading: string;
  children: React.ReactNode;
};

const MenuList = ({ heading, children }: Props) => (
  <>
    {heading}
    <ListContainer>
      {children}
    </ListContainer>
  </>
)

const ListContainer = styled.ul`
  list-style-type: none;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
`;

export default MenuList;