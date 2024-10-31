import { StyledNotebookPagesContainer } from "../styles/NotebookPagesContainer.styled";

export default function NotebookPages({ children }) {
  return (
    <StyledNotebookPagesContainer>{children}</StyledNotebookPagesContainer>
  );
}
