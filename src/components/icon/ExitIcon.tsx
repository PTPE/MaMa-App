import styled from "styled-components";
type IconType = {
  styles?: {
    width?: string;
    height?: string;
  };
};
export default function ExitIcon(props: IconType) {
  const mergesStyles = { ...ExitIcon.defaultProps.styles, ...props.styles };

  return (
    <Container styles={mergesStyles}>
      <Line className="top" />
      <Line className="bottom" />
    </Container>
  );
}

ExitIcon.defaultProps = {
  styles: {
    width: "30px",
    height: "30px",
  },
};

const Container = styled.div<IconType>`
  position: relative;
  margin: auto;
  width: ${(props) => props.styles!.width};
  height: ${(props) => props.styles!.height};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 3px;
  background: #fcc822;
  transition: all 0.3s ease-in;
  border-radius: 5px;

  &.top {
    transform: rotate(-45deg);
  }
  &.bottom {
    transform: rotate(45deg);
  }

  ${Container}:hover &.top {
    background: #002a6a;
    transform: rotate(45deg);
  }
  ${Container}:hover &.bottom {
    background: #002a6a;
    transform: rotate(-45deg);
  }
`;
