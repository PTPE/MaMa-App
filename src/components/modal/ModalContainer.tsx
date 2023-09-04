import { createPortal } from "react-dom";
import { keyframes, styled } from "styled-components";
import ExitButton from "../ui/modal/ExitButton";

export default function ModalContainer({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <>
      {createPortal(
        <BackDropOverlay>
          <Modal onClick={onClick}>{children}</Modal>
        </BackDropOverlay>,
        document.querySelector("#modal")!
      )}
    </>
  );
}

function Modal({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Container>
      <div className="exit">
        <ExitButton onClick={onClick} />
      </div>
      {children}
    </Container>
  );
}

const blowUpModal = keyframes`
  from {
    background:transparent;
  }
  to {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const openModal = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const Container = styled.div`
  width: 60%;
  background-color: #fff;
  border-radius: 10px;
  z-index: 1000;
  position: fixed;
  animation: ${openModal} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  display: flex;
  flex-direction: column;
  .exit {
    position: absolute;
    align-self: end;
    top: 15px;
    right: 15px;
  }
`;

const BackDropOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  animation: ${blowUpModal} 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;

}
`;
