import styled from "styled-components";

export default function ExitButton({ onClick }: { onClick: () => void }) {
  return (
    <Container onClick={onClick}>
      <Line className="top" />
      <Line className="bottom" />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin: auto;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 3px;
  background: #fcc822;
  transition: all 0.3s ease-in;
  border-radius: 5px;

  &.top {
    transform: rotate(-45deg);
  }
  &.bottom {
    transform: rotate(45deg);
  }

  ${Container}:hover &.top {
    background: #002a6a;
    transform: rotate(45deg);
  }
  ${Container}:hover &.bottom {
    background: #002a6a;
    transform: rotate(-45deg);
  }
`;
