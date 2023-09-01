import { useState } from "react";
import styled, { keyframes } from "styled-components";

type DropDownServiceMenuType = {
  handleClick: () => void;
  isClicked: boolean;
  options: string[];
  selectedOption: string;
  setSelectedOption: (value: string) => void;
  width?: string;
};

export default function DropDownMenu(props: DropDownServiceMenuType) {
  const [openList, setOpenList] = useState(true);

  return (
    <DropDown style={{ minWidth: `${props.width || "150px"}` }}>
      <Label className="label" onClick={() => setOpenList(!openList)}>
        {props.selectedOption}
      </Label>
      <List className={openList ? "active" : ""}>
        {props.options.map((item) => (
          <Item
            key={item}
            onClick={() => {
              setOpenList(false);
              props.setSelectedOption(item);
            }}
          >
            {item}
          </Item>
        ))}
      </List>
    </DropDown>
  );
}

const dropDownAnimation = keyframes`
  from{
    transform:  scaleY(0);
    color:transparent;
  }
  to{
    transform: scaleY(100%);
    color:black;
  }
`;

const DropDown = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  position: relative;
`;
const Label = styled.div`
  border-bottom: 2px solid #ffcc29;
  text-align: center;
  padding: 2px;
  transform-origin: left;
  animation: ${dropDownAnimation} 300ms ease-in-out;
  cursor: pointer;
`;

const List = styled.ul`
  position: absolute;
  top: 35px;
  z-index: 1000;
  background: #f2f2f2;
  padding: 10px;
  overflow: auto;
  height: 200px;
  transform-origin: top;
  border-radius: 10px;
  transform: scaleY(0);
  color: transparent;
  cursor: pointer;
  &.active {
    animation: ${dropDownAnimation} 300ms ease-in-out;
    transform: scaleY(100%);
    color: black;
  }
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
