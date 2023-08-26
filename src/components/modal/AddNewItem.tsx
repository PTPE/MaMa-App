import { keyframes, styled } from "styled-components";

type AddNewItemType = {
  children: React.ReactNode;
  onClick: () => void;
  isClicked: boolean;
};

export default function AddNewItem(props: AddNewItemType) {
  return (
    <Add onClick={props.onClick} className={props.isClicked ? "active" : ""}>
      {props.children}
    </Add>
  );
}

const wordColorAnimation = keyframes`
    0%{
        color:transparent;
    }
    60%{
        color:transparent;
    }
    100%{
        color:black;
    }
`;

const Add = styled.div`
  font-weight: 400;
  width: 30px;
  height: 30px;
  background: #ffcc29;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  overflow: hidden;

  &:hover {
    background: #ffe9a1;
  }
  &.active {
    background: transparent;
    border: 2px solid #ffe9a1;
    width: 160px;
    height: 42px;
    border-radius: 10px;
    animation: ${wordColorAnimation} 300ms;
  }
`;
