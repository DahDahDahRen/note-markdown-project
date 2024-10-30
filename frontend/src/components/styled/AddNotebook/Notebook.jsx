import styled from "styled-components";

const StyledNotebook = styled.h2`
  font-weight: 500;
  font-size: 0.875rem;
`;

export default function Notebook({ children }) {
  return <StyledNotebook>{children}</StyledNotebook>;
}
