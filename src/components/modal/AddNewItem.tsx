import styled from "styled-components";
import Button from "../Button";

type AddNewItemType = {
  isClicked: boolean;
  handleClick: () => void;
};

export default function AddNewItem(props: AddNewItemType) {
  return (
    <AddButton
      className={props.isClicked ? "active" : ""}
      onClick={props.handleClick}
    >
      {props.isClicked ? (
        <Button
          styles={{ fontSize: "20px", padding: "4px 8px", fontWeight: "400" }}
        >
          新增
        </Button>
      ) : (
        <span>＋</span>
      )}
    </AddButton>
  );
}

const AddButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: #ffcc29;
  border-radius: 50%;
  cursor: pointer;
  padding: 3px;
  position: relative;
  &.active {
    width: 80px;
    border-radius: 10px;
    background: transparent;
  }
`;
