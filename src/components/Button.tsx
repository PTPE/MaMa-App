import { styled } from "styled-components";

type buttonProps = {
  children: React.ReactNode;
} & stylesProp;

type stylesProp = {
  styles?: {
    color?: string;
    backgroundColor?: string;
    padding?: string;
    fontSize?: string;
    fontWeight?: string;
  };
};

function Button(props: buttonProps) {
  const mergesStyles = { ...Button.defaultProps.styles, ...props.styles };
  return <Buttons styles={mergesStyles}>{props.children}</Buttons>;
}

Button.defaultProps = {
  styles: {
    color: "black",
    backgroundColor: "#FFCC29",
    fontSize: "24px",
    padding: "10px 20px",
    fontWeight: "500",
  },
};

export default Button;

const Buttons = styled.button<stylesProp>`
  color: ${(props) => props.styles?.color};
  background: ${(props) => props.styles?.backgroundColor};
  font-size: ${(props) => props.styles?.fontSize};
  padding: ${(props) => props.styles?.padding};
  font-weight: ${(props) => props.styles?.fontWeight};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #ffe9a1;
  }
`;
