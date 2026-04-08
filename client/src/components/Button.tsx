import styled from 'styled-components';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type Props = {
  label: string;
} & ButtonProps &
  FormattingProps;

type FormattingProps = {
  size?: 'Small' | 'Medium' | 'Large';
};

export const Button = ({ label, size, ...ButtonProps }: Props) => (
  <FormattedButton size={size} {...ButtonProps}>
    {label}
  </FormattedButton>
);

const FormattedButton = styled.button<FormattingProps>`
  width: ${({ size }) =>
    size === 'Small' ? '50px' : size === 'Large' ? '200px' : '100px'};
`;
