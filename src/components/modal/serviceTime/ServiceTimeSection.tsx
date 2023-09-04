import AddNewServiceTime from "./AddNewServiceTime";
import SelectSection from "../../ui/modal/SelectSection";
export default function ServiceTimeSection() {
  return (
    <SelectSection label="服務時間" selectedItems={["星期一 10:00 - 15:00"]}>
      <AddNewServiceTime />
    </SelectSection>
  );
}
