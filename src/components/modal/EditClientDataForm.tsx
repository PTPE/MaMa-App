import { styled } from "styled-components";
import NameSection from "./name/NameSection";
import ServiceSection from "./service/ServiceSection";
import ServiceTimeSection from "./serviceTime/ServiceTimeSection";
import AddressSection from "./address/AddressSection";

export default function EditClientDataForm() {
  return (
    <FormContainer>
      <NameSection />
      <ServiceSection />
      <ServiceTimeSection />
      <AddressSection />
      <Submit>提交</Submit>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  padding: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  gap: 40px;
`;

const Submit = styled.button`
  font-size: 20px;
  background: #ffcc29;
  border: none;
  border-radius: 10px;
  padding: 8px 20px;
  align-self: end;
  cursor: pointer;

  &:hover {
    background: #ffe9a1;
  }
`;
