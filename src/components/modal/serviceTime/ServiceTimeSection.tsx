import styled from "styled-components";
import SelectedItems from "../SelectedItems";
import AddNewServiceTime from "./AddNewServiceTime";
export default function ServiceTimeSection() {
  return (
    <Container>
      <Label>服務時間</Label>
      <SelectedList>
        <SelectedItems
          selectedItems={[
            "星期一 14:00 - 16:00",
            "星期二 14:00 - 16:00",
            "星期三 14:00 - 16:00",
          ]}
        />
        <AddNewServiceTime />
      </SelectedList>
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
const SelectedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
