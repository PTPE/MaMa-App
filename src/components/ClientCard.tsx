import EditIcon from "./EditIcon";
import TrashCanIcon from "./TrashCanIcon";
import OldWomanIcon from "./OldWomanIcon";
import styled from "styled-components";
import Button from "./Button";
import OldManIcon from "./OldManIcon";
import ModalContainer from "./ModalContainer";
import ModalContent from "./ModalContent";

type DataType = {
  data: {
    id: number;
    name: string;
    gender: string;
    address: string;
    service: string[];
    time: TimeType[];
  };
};

type TimeType = {
  day: string;
  startHour: string;
  startMin: string;
  endHour: string;
  endMin: string;
};

function formatTime(time: TimeType) {
  return `${time.day}${time.startHour}:${time.startMin} - ${time.endHour}:${time.endMin}`;
}

export default function ClientCard(props: DataType) {
  return (
    <Card>
      <Icons>
        <Button
          styles={{
            padding: "4px 8px",
            fontSize: "16px",
            backgroundColor: "transparent",
          }}
        >
          <EditIcon />
        </Button>
        <Button
          styles={{
            padding: "5px 8px",
            fontSize: "16px",
            backgroundColor: "transparent",
          }}
        >
          <TrashCanIcon />
        </Button>
      </Icons>
      <Identity>
        {props.data.gender === "男" ? <OldManIcon /> : <OldWomanIcon />}

        <h2>{props.data.name}</h2>
      </Identity>
      <Service>
        <label>服務項目｜</label>
        <ul>
          {props.data.service.map((service) => (
            <li>{service}</li>
          ))}
        </ul>
      </Service>
      <Time>
        <label> 服務時間｜</label>
        <ul>
          {props.data.time.map((time) => (
            <li>{formatTime(time)}</li>
          ))}
        </ul>
      </Time>
      <Address>
        <label>服務地址｜</label>
        <span className="item">{props.data.address}</span>
      </Address>
      {props.data.name === "" ? (
        ""
      ) : (
        <ModalContainer>
          <ModalContent />
        </ModalContainer>
      )}
    </Card>
  );
}

const Card = styled.div`
  width: 400px;
  padding: 40px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  position: relative;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  h2 {
    text-align: center;
  }
  .icons {
    position: absolute;
    right: 10%;
  }
`;

const Identity = styled.div`
  text-align: center;
`;

const Service = styled.div`
  display: flex;
  align-items: baseline;
  label {
    flex: 0 0 auto;
    font-weight: 500;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  li {
    list-style: none;
    padding: 2px;
    border-radius: 10px;
  }
`;
const Time = styled(Service)`
  ul {
    flex-direction: column;
  }
`;
const Address = styled(Service)`
  ul {
    flex-direction: column;
  }
`;
const Icons = styled.div`
  position: absolute;
  right: 20px;
  display: flex;
`;
