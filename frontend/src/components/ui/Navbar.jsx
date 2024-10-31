import { NavBar } from "../styles/NavContainer.styled";
import { Button } from "../styles/Button.styled";
import { StyledNoteBookItem } from "../styles/Notebook.styled";
import { StyledNotebookPageItem } from "../styles/NotebookPageItem.styled";
import { FaPlusCircle, FaBook, FaTrash } from "react-icons/fa";

function Navbar() {
  const subjects = [
    { id: 1, subjectName: "Criminal Law" },
    { id: 2, subjectName: "Administrative Law" },
    { id: 3, subjectName: "Taxation Law" },
    { id: 4, subjectName: "Political Law" },
  ];

  const handleAddNotebook = () => {
    console.log("Add New Notebook!");
  };

  return (
    <NavBar>
      <div className="nav-logo">
        <span>📓</span> <p>Notey</p>
      </div>

      <div className="nav-add-notebook">
        <p>Notebook</p>

        <Button onClick={handleAddNotebook}>
          <FaPlusCircle />
        </Button>
      </div>

      <ul>
        <StyledNoteBookItem>
          <p className="notebook-title">Law Notebook</p>

          <ul className="notebook-pages">
            {subjects.map((subject) => (
              <StyledNotebookPageItem key={subject.id}>
                <div className="page-detail">
                  <FaBook />
                  <p className="page-title">{subject.subjectName}</p>
                </div>

                <Button>
                  <FaTrash />
                </Button>
              </StyledNotebookPageItem>
            ))}
          </ul>
        </StyledNoteBookItem>
      </ul>
    </NavBar>
  );
}

export default Navbar;
