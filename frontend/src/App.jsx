import { StyledGridLayout } from "./components/styles/GridLayout.styled";
import Navbar from "./components/ui/Navbar";
import NotebookPages from "./components/ui/NotebookPages";

function App() {
  return (
    <StyledGridLayout>
      <Navbar />
      <NotebookPages />
      <div>Hello World</div>
    </StyledGridLayout>
  );
}

export default App;
