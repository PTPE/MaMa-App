import styled from "styled-components";

type InputSectionType = {
  label: string;
  type: "longInput" | "shortInput";
};

export default function InputSection(props: InputSectionType) {
  return (
    <Container>
      <Label>{props.label}</Label>
      <Input
        style={
          props.type === "longInput" ? { width: "300px" } : { width: "150px" }
        }
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Label = styled.label`
  font-weight: 500;
  flex: 0 0 auto;
  align-self: start;
  margin-top: 3px;
  margin-right: 20px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 2px solid #f3f3f3;
  font-size: 20px;
  color: #002a6a;
  text-align: center;
  &:focus {
    border-bottom: 2px solid #ffcc29;
  }
`;
