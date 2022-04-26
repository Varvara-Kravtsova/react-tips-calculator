import { StyledInput } from "./style";

interface IProps {
 name: string;
 value: string | number;
 handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ name, value, handleInput }: IProps) => {
 return (
  <StyledInput
   type="number"
   placeholder={`Enter ${name}`}
   name={name}
   min="1"
   value={value}
   onChange={handleInput}
  />
 );
};

export default Input;
