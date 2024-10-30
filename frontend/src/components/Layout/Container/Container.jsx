import styled from "styled-components";

const StyleGridContainer = styled.div`
  display: grid;
  grid-template-columns: 215px 300px 1fr;
  grid-template-rows: auto;
  height: 100vh;
`;

export default function Container({ children }) {
  return <StyleGridContainer>{children}</StyleGridContainer>;
}
