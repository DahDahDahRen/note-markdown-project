import styled from "styled-components";

export const Button = styled.button`
  font-size: 16px;
  cursor: pointer;

  padding: 0;
  border: none;

  background-color: transparent;
  color: ${({ theme }) => theme.color.secondary};
`;
