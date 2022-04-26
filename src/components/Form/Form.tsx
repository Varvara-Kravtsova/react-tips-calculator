import Input from "../Input/Input";
import Button from "../Button/Button";
import CustomSelect from "../CustomSelect/CustomSelect";
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { ITips } from "../../types";
import { StyledForm, Title, Text, InputsContainer, Total } from "./style";
import { IOptions } from "../../types/index";

const Form = () => {
 const [tips, setTotal] = useState<ITips>({
  bill: "",
  persons: "",
  tip: { value: 0.1, label: "10%" },
  total: 0,
 });

 const { bill, persons, tip, total } = tips;

 const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
  const { value, name } = e.target;
  setTotal({ ...tips, [name]: value });
 };

 const handleSelect = (value: IOptions | null) => {
  if (value) {
   setTotal({ ...tips, tip: value });
  }
 };

 const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const totalSum = (+bill * +tip.value) / +persons;

  if (bill && persons) {
   setTotal({ ...tips, total: totalSum });
  }
 };

 const [isDisabled, setIsDisabled] = useState<boolean>(true);

 useEffect(() => {
  if (tips.bill > 0 && tips.persons > 0) {
   setIsDisabled(false);
  } else {
   setIsDisabled(true);
  }
 }, [tips]);

 return (
  <StyledForm onSubmit={handleSubmit}>
   <Title>Welcome to App</Title>
   <Text>Lets go calculate your tips</Text>
   <InputsContainer>
    <Input name="bill" handleInput={handleInput} value={bill} />
    <Input name="persons" handleInput={handleInput} value={persons} />
    <CustomSelect name="selectTip" handleSelect={handleSelect} value={tip} />
   </InputsContainer>
   <Total>Total: {total.toFixed(2)}$</Total>
   <Button isDisabled={isDisabled} />
  </StyledForm>
 );
};

export default Form;
