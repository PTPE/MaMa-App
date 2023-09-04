import { useState } from "react";
import AddNewItem from "../../ui/modal/AddNewItem";
import styled from "styled-components";
import DropDownMenu from "../../ui/modal/DropDownMenu";
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
export default function AddNewService() {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("測量生命跡象");
  function handleClick() {
    setIsClicked(!isClicked);
  }

  function setSelectedOptionHandler(value: string) {
    setSelectedOption(value);
  }

  return (
    <Container className={isClicked ? "active" : ""}>
      {isClicked ? (
        <DropDownMenu
          isClicked={isClicked}
          handleClick={() => setIsClicked(false)}
          options={serviceOptions}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOptionHandler}
        />
      ) : (
        ""
      )}
      <AddNewItem isClicked={isClicked} handleClick={handleClick} />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  height: 100%;
  &.active {
  }
  div {
    flex: 0 0 auto;
  }
`;
