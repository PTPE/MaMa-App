import { useState } from "react";
import EditIcon from "./icon/EditIcon";
import TrashCanIcon from "./icon/TrashCanIcon";
import OldWomanIcon from "./icon/OldWomanIcon";
import styled from "styled-components";
import Button from "./Button";
import OldManIcon from "./icon/OldManIcon";
import ModalContainer from "./modal/ModalContainer";
import EditClientDataForm from "./modal/EditClientDataForm";
import { DataType } from "../modules/ClientDataType";
import { TimeType } from "../modules/ClientDataType";

function formatTime(time: TimeType) {
  return `${time.day}${time.startHour}:${time.startMin} - ${time.endHour}:${time.endMin}`;
}

export default function ClientCard({ data }: { data: DataType }) {
  const [openEditModal, setOpenEditModal] = useState(false);

  function handleOpenModal() {
    setOpenEditModal(true);
  }

  function handleCloseModal() {
    setOpenEditModal(false);
  }

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
          <EditIcon onClick={handleOpenModal} />
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
        {data.gender === "男" ? <OldManIcon /> : <OldWomanIcon />}

        <h2>
          <span>{data.name}</span>
        </h2>
      </Identity>
      <Service>
        <label>服務項目｜</label>
        <ul>
          {data.service.map((service, i) => (
            <li key={i}>{service}</li>
          ))}
        </ul>
      </Service>
      <Time>
        <label> 服務時間｜</label>
        <ul>
          {data.time.map((time, i) => (
            <li key={i}>{formatTime(time)}</li>
          ))}
        </ul>
      </Time>
      <Address>
        <label>服務地址｜</label>
        <span className="item">{data.address}</span>
      </Address>
      {openEditModal && (
        <ModalContainer onClick={handleCloseModal}>
          <EditClientDataForm />
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
  display: inline;

  span {
    background-image: linear-gradient(rgba(0 0 0 /0) 70%, #53a8c7 70%);
  }
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
