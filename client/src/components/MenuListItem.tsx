import styled from 'styled-components';

type Props = {
  option: string;
  chooseOption: () => void;
  selected?: boolean;
  disabled?: boolean;
};

const MenuListItem = ({ option, selected, disabled, chooseOption }: Props) => (
  <OptionContainer disabled={disabled} onClick={chooseOption}>
    {option}
    {selected ? ' Y ' : ''}
  </OptionContainer>
);

const OptionContainer = styled.li<{ disabled?: boolean }>`
  color: ${(props) => (props.disabled ? '#3e4043' : '#9ca3af')};
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
`;

export default MenuListItem;
