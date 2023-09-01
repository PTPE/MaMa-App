import { styled } from "styled-components";

export default function ClientList(props: { children: React.ReactNode }) {
  return <List>{props.children}</List>;
}

const List = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 100px;
  margin-bottom: 100px;
`;
