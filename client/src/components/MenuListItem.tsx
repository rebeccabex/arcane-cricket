import styled from 'styled-components';

type Props = {
  option: string;
  chooseOption: () => void;
  selected?: boolean;
  disabled?: boolean;
};

const MenuListItem = ({ option, selected, disabled, chooseOption }: Props) => (
  <OptionContainer
    disabled={disabled}
    onClick={chooseOption}
    selected={selected}
  >
    {option}
  </OptionContainer>
);

const OptionContainer = styled.li<{ disabled?: boolean; selected?: boolean }>`
  color: ${(props) => (props.disabled ? '#3e4043' : '#9ca3af')};
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
  font-weight: ${({ selected }) => selected && 800};
`;

export default MenuListItem;
