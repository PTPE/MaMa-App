import SelectedItems from "./SelectedItems";
import styled from "styled-components";

type SelectSectionType = {
  label: string;
  selectedItems: string[];
  children: React.ReactNode;
};
export default function SelectSection(props: SelectSectionType) {
  return (
    <Container>
      <Label>服務項目</Label>
      <SelectedList>
        <SelectedItems selectedItems={props.selectedItems} />
        {props.children}
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
