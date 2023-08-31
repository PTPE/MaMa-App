import styled, { keyframes } from "styled-components";

const serviceOptions = [
  "測量身命跡象",
  "協助餵食或灌食",
  "餐食照顧",
  "協助沐浴與洗頭",
  "翻身拍背",
  "肢體關節活動",
  "協助上（下）樓梯",
  "陪同外出",
  "陪同就醫",
  "家務協助（自用）",
  "家務協助（家用）",
  "代購或代領或代送服務（自用）",
  "代購或代領或代送服務（家用）",
  "協助執行輔助性醫療",
  "安全看視",
  "陪伴服務",
  "巡視服務",
  "協助洗頭",
  "協助排泄",
];

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
        {serviceOptions.map((item) => (
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
