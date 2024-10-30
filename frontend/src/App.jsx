import Container from "./components/Layout/Container/Container";
import Notebook from "./components/styled/AddNotebook/Notebook";
import ContainerFlex from "./components/Layout/Container/ContainerFlex/ContainerFlex";
import NoBackgroundBtn from "./components/styled/NobackgroundBtn/NobackgroundBtn";
import { FaPlusCircle } from "react-icons/fa";

function App() {
  const handleCreateNewNotebook = (e) => {
    e.preventDefault();

    console.log("Create new notebook!");
  };

  return (
    <Container>
      <nav>
        <ContainerFlex>
          <Notebook>Notebook</Notebook>

          <span>
            <NoBackgroundBtn onClick={handleCreateNewNotebook}>
              <FaPlusCircle />
            </NoBackgroundBtn>
          </span>
        </ContainerFlex>
      </nav>

      <section>
        <h2>Notebook page</h2>
      </section>

      <div>
        <main>
          <h1>My Note</h1>
        </main>
      </div>
    </Container>
  );
}

export default App;
