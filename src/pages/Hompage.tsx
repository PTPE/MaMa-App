import DogIcon from "../components/icon/DogIcon";
import styled from "styled-components";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Hompage() {
  return (
    <Container>
      <Title>
        <span>MaMa</span> APP
      </Title>
      <DogIcon width={250} height={250} />
      <Link to="app">
        <Button
          styles={{
            padding: "20px 60px",
            fontWeight: "600",
          }}
        >
          Start
        </Button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;

const Title = styled.h1`
  font-size: 50px;
  span {
    color: #ffcc29;
  }
`;
