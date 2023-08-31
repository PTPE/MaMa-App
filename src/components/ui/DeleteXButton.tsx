import { styled } from "styled-components";

export default function DeleteXButton() {
  return (
    <Container>
      <Line className="top" />
      <Line className="bottom" />
    </Container>
  );
}

const Container = styled.div`
  width: 15px;
  height: 15px;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Line = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  background: #002a6a;

  &.top {
    transform: rotate(-45deg);
  }
  &.bottom {
    transform: rotate(45deg);
  }
`;
