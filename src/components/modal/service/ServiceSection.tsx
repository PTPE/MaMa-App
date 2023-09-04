import { styled } from "styled-components";
import AddNewService from "./AddNewService";
import SelectedItems from "../../ui/modal/SelectedItems";

export default function ServiceSection() {
  return (
    <Container>
      <Label>服務項目</Label>
      <SelectedList>
        <SelectedItems
          selectedItems={["基本身體清潔", "基本身體照護", "基本測量"]}
        />
        <AddNewService />
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
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-right: 10px;
`;
