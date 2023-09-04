import AddNewService from "./AddNewService";
import SelectSection from "../../ui/modal/SelectSection";

export default function ServiceSection() {
  return (
    <SelectSection label="服務項目" selectedItems={["基本身體清潔"]}>
      <AddNewService />
    </SelectSection>
  );
}
