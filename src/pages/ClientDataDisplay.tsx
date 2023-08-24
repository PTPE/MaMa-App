import { styled } from "styled-components";
import { useClientData } from "../context/ClientData";
import ClientCard from "../components/ClientCard";
import ClientList from "../components/ClientList";
import Button from "../components/Button";
import { useEffect } from "react";

export default function ClientDataDisplay() {
  const ctx = useClientData();
  const { data, fetchClient, isLoading } = ctx!;

  useEffect(() => {
    (async () => {
      await fetchClient();
    })();
  }, [fetchClient]);

  if (isLoading) return <div></div>;

  return (
    <Container>
      <Add>
        <Button
          styles={{
            backgroundColor: "#ffe9a1",
            padding: "12px 19px",
            borderRadius: "50%",
          }}
        >
          +
        </Button>
      </Add>
      <ClientList>
        {data.map((data) => (
          <ClientCard data={data} />
        ))}
      </ClientList>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;
const Add = styled.div`
  align-self: end;
  margin-right: 100px;
`;
