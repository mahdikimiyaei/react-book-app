import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
import { useContext } from "react";
import { BooksContext } from "../Contex/BooksContext";
import { FormContext } from "../Contex/FormContext";

export default function Header() {
  const { loading, error } = useContext(BooksContext);
  const { errorRegistered, seccesFully } = useContext(FormContext);

  return (
    <>
      <header className="header">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container className="nav-countainer">
            <Navbar.Brand className="navbar">Manage-Books</Navbar.Brand>
            <Nav className="me-auto links" style={{display: "flex", gap: "20px"}}>
              <Button className="border-info" as={Link} to="/">
                خانه
              </Button>
              <Button
                as={Link}
                to="/Login"
                className={(loading && "link-login") || (error && "link-login")}
                style={{ marginTop: "-2px", backgroundColor: "blue" }}
              >
                ورود
              </Button>
              <Button
                as={Link}
                to="/addBook"
                style={{backgroundColor: "blue"}}
                className={(loading && "link-login") || (error && "link-login")}
                disabled={seccesFully || !errorRegistered}
              >
                افزودن کتاب
              </Button>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
