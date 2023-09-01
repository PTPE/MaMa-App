import styled, { keyframes } from "styled-components";

type DropDownServiceMenuType = {
  handleClick: () => void;
  isClicked: boolean;
  options: string[];
};
export default function DropDownServiceMenu(props: DropDownServiceMenuType) {
  return (
    <DropDown>
      <Label className="label">請選擇</Label>
      <List className={props.isClicked ? "active" : ""}>
        {props.options.map((item) => (
          <Item key={item} onClick={props.handleClick}>
            {item}
          </Item>
        ))}
      </List>
    </DropDown>
  );
}

const dropDownAnimation = keyframes`
  from{
    transform: scaleX(0) scaleY(0);
    color:transparent;
  }
  to{
    transform: scaleX(100%) scaleY(100%);
    color:black;
  }
`;

const DropDown = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
`;
const Label = styled.div`
  display: block;
  border: 2px solid #ffcc29;
  text-align: center;
  padding: 2px;
  transform-origin: left;
  border-radius: 10px;
  animation: ${dropDownAnimation} 300ms ease-in-out;
`;

const List = styled.ul`
  z-index: 1000;
  background: #f2f2f2;
  padding: 10px;
  overflow: auto;
  height: 200px;
  transform-origin: top left;
  animation: ${dropDownAnimation} 300ms ease-in-out;
  border-radius: 10px;
`;

const Item = styled.li`
  list-style: none;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  &:hover {
    background: #ffe9a1;
  }
`;
