import { styled } from "styled-components";

type ClientListType = {
  children: React.ReactNode;
};

export default function ClientList(props: ClientListType) {
  return <List>{props.children}</List>;
}

const List = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 100px;
  margin-bottom: 100px;
`;
