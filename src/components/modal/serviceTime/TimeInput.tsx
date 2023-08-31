import { useReducer } from "react";
import DropDownMenu from "../DropDownMenu";

type TimeInputType = {
  handleClick: () => void;
  isClicked: boolean;
  timeType: "day" | "startHour" | "startMin" | "endHour" | "endMin";
  timeList: string[];
};

type StateType = {
  day: string;
  startHour: string;
  startMin: string;
  endHour: string;
  endMin: string;
};

type ActionType = {
  type: string;
  payload: string;
};

const initialState: StateType = {
  day: "一",
  startHour: "08",
  startMin: "00",
  endHour: "08",
  endMin: "00",
};
const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "day":
      return { ...state, day: action.payload };
    case "startHour":
      return { ...state, startHour: action.payload };
    case "startMin":
      return { ...state, startMin: action.payload };
    case "endHour":
      return { ...state, endHour: action.payload };
    case "endMin":
      return { ...state, endMin: action.payload };
    default:
      return initialState;
  }
};
export default function TimeInput(props: TimeInputType) {
  const [state, dispatch] = useReducer(reducer, initialState);
  function setSelectionOption(payload: string) {
    dispatch({ type: props.timeType, payload: payload });
  }
  return (
    <DropDownMenu
      isClicked={props.isClicked}
      handleClick={props.handleClick}
      options={props.timeList}
      selectedOption={state[props.timeType]}
      setSelectedOption={setSelectionOption}
      width={"50px"}
    ></DropDownMenu>
  );
}
