import { styled } from "styled-components";

type ClientCardInfoFieldType = {
  label: string;
  content: string[] | string;
};

export default function ClientCardInfoField(props: ClientCardInfoFieldType) {
  return (
    <Field>
      <Label>{props.label}｜</Label>
      <Content>
        {typeof props.content === "string" ? (
          <span>{props.content}</span>
        ) : (
          <ul>
            {props.content.map((content) => (
              <li key={content}>{content}</li>
            ))}
          </ul>
        )}
      </Content>
    </Field>
  );
}

const Field = styled.div`
  display: flex;
  align-items: baseline;
`;

const Label = styled.label`
  flex: 0 0 auto;
  font-weight: 500;
`;

const Content = styled.div`
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
