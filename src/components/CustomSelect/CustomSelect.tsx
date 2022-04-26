import Select, { StylesConfig } from "react-select";
import { IOptions } from "../../types/index";

interface ISelect {
 name: string;
 value: IOptions;
 handleSelect: (options: IOptions | null) => void;
}

const CustomSelect = ({ name, handleSelect, value }: ISelect) => {
 const options: IOptions[] = [
  { value: 0.1, label: "10%" },
  { value: 0.15, label: "15%" },
  { value: 0.2, label: "20%" },
 ];

 const customStyles: StylesConfig<IOptions> = {
  control: (provided) => ({
   ...provided,
   borderRadius: "30px",
   paddingTop: "15px",
   paddingBottom: "15px",
   paddingLeft: "10px",
   border: "none",
   cursor: "pointer",
  }),

  singleValue: (provided) => ({
   ...provided,
   textAlign: "center",
   color: " rgba(117, 108, 108, 0.6)",
  }),

  dropdownIndicator: (provided) => ({
   ...provided,
   color: " rgba(117, 108, 108, 1) ",
  }),

  indicatorsContainer: (provided) => ({
   ...provided,
   marginRight: "19px",
  }),

  placeholder: (provided) => ({
   ...provided,
   fontWeight: "400",
   fontSize: "18px",
   lineHeight: "26px",
   color: " rgba(117, 108, 108, 1) ",
  }),

  indicatorSeparator: (provided) => ({
   ...provided,
   display: "none",
  }),
 };

 return (
  <Select
   name={name}
   onChange={handleSelect}
   isMulti={false}
   value={value}
   defaultValue={options[0]}
   options={options}
   styles={customStyles}
  />
 );
};

export default CustomSelect;
