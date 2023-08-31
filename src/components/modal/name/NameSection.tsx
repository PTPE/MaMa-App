import { styled } from "styled-components";

export default function NameSection() {
  return (
    <Container>
      <Label>姓名</Label>
      <Input defaultValue="王小明" />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  gap: 20px;
`;
const Label = styled.label`
  font-weight: 500;
  margin-right: 10px;
`;
const Input = styled.input`
  width: 150px;
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
