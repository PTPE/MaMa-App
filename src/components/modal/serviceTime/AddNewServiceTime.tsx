import { useState } from "react";
import styled from "styled-components";
import AddNewItem from "../AddNewItem";
import TimeInput from "./TimeInput";

const dayList = ["一", "二", "三", "四", "五", "六", "日"];
const hourList = Array.from({ length: 14 }, (_, index) =>
  (index + 7).toString().padStart(2, "0")
);
const minList = ["00", "15", "30", "45"];

export default function AddNewServiceTime() {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <Container>
      {isClicked && (
        <>
          <label onClick={handleClick}>星期</label>
          <TimeInput
            handleClick={handleClick}
            isClicked={isClicked}
            timeType="day"
            timeList={dayList}
          />
          &nbsp;
          <TimeInput
            handleClick={handleClick}
            isClicked={isClicked}
            timeType="startHour"
            timeList={hourList}
          />
          ：
          <TimeInput
            handleClick={handleClick}
            isClicked={isClicked}
            timeType="startMin"
            timeList={minList}
          />
          －
          <TimeInput
            handleClick={handleClick}
            isClicked={isClicked}
            timeType="endHour"
            timeList={hourList}
          />
          ：
          <TimeInput
            handleClick={handleClick}
            isClicked={isClicked}
            timeType="endMin"
            timeList={minList}
          />
        </>
      )}
      <AddNewItem isClicked={isClicked} handleClick={handleClick}></AddNewItem>
    </Container>
  );
}

// function DayInput(props: DayInputType) {
//   const [selectedTime, setSelectedTime] = useState("一");
//   return (
//     <>
//       <label onClick={props.handleClick}>星期</label>
//       <DropDownMenu
//         isClicked={props.isClicked}
//         handleClick={props.handleClick}
//         options={["一", "二", "三", "四", "五", "六", "日"]}
//         selectedOption={selectedTime}
//         setSelectedOption={setSelectedTime}
//         width={"50px"}
//       ></DropDownMenu>
//     </>
//   );
// }

const Container = styled.div`
  display: flex;
  align-items: center;
`;
