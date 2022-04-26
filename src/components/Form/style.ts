import styled from "styled-components";

const StyledForm = styled.form`
 display: grid;
 gap: 45px;

 max-width: 456px;
 width: 100%;
 margin: 0 auto;
 padding-top: 170px;
 padding-bottom: 50px;

 @media (max-width: 1024px) {
  max-width: 340px;
 }
`;

const Title = styled.h1`
 font-weight: 400;
 font-size: 40px;
 line-height: 58px;
 text-align: center;

 @media (max-width: 1024px) {
  font-size: 24px;
  line-height: 35px;
 }
`;

const Text = styled.p`
 font-weight: 400;
 font-size: 32px;
 line-height: 38px;
 text-align: center;

 color: rgba(117, 108, 108, 0.57);

 @media (max-width: 1024px) {
  font-size: 24px;
  line-height: 28px;
 }
`;

const InputsContainer = styled.div`
 display: grid;
 gap: 33px;

 max-width: 460px;
 width: 100%;
 margin: 0 auto;

 @media (max-width: 1024px) {
  gap: 17px;
  max-width: 340px;
 }
`;

const Total = styled.p`
 margin-right: 10px;

 font-weight: 500;
 font-size: 24px;
 line-height: 35px;
 color: rgba(0, 0, 0, 1);

 @media (max-width: 768px) {
  font-size: 18px;
  line-height: 26px;
 }
`;

export { StyledForm, Title, Text, InputsContainer, Total };
