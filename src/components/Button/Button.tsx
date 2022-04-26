import { StyledButton } from "./style";

export interface IProps {
 isDisabled: boolean;
}

const Button = ({ isDisabled }: IProps) => {
 return (
  <StyledButton type="submit" isDisabled={isDisabled}>
   Ohhhoooo🍻
  </StyledButton>
 );
};
export default Button;
