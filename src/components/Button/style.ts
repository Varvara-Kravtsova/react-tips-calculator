import styled from "styled-components";
import { IProps } from "./Button";

const StyledButton = styled.button<IProps>`
 max-width: 459px;
 width: 100%;
 padding-top: 13px;
 padding-bottom: 13px;

 font-weight: 400;
 font-size: 24px;
 line-height: 35px;
 color: rgba(255, 255, 255, 1);

 background-color: rgba(46, 210, 201, 1);
 transition: background-color 0.3s;
 opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
 cursor: ${({ isDisabled }) => (isDisabled ? "default" : "pointer")};

 &:hover {
  background-color: ${({ isDisabled }) =>
   isDisabled ? "rgb(46, 210, 201)" : "rgb(37, 173, 165)"};
 }

 &:active {
  background-color: rgba(46, 210, 201, 1);
 }

 @media (max-width: 1024px) {
  max-width: 331px;
 }
`;

export { StyledButton };
