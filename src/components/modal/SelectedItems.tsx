import styled from "styled-components";
import DeleteXIcon from "../icon/DeleteXIcon";

type SelectedItemsType = {
  selectedItems: string[];
};
export default function SelectedItems(props: SelectedItemsType) {
  return (
    <>
      {props.selectedItems.map((item) => (
        <Item key={item}>
          {item}
          <DeleteXIcon />
        </Item>
      ))}
    </>
  );
}

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #002a6a;
  padding: 3px 6px;
  list-style: none;
  border: 2px solid #002a6a;
  border-radius: 10px;
`;
