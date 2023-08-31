import styled from "styled-components";
export default function AddressSection() {
  return (
    <Container>
      <Label>服務地址</Label>
      <Input />
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
  width: 300px;
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
