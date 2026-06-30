import "../App.css";
import { useContext } from "react";
import { BooksContext } from "../Contex/BooksContext";
import BookItem from "./BookItem";
import Spinner from "react-bootstrap/Spinner";
import { FormContext } from "../Contex/FormContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BookCard() {
  const { books, loading, error, seccesRenderPage } = useContext(BooksContext);
  const { seccesFully, errorRegistered } = useContext(FormContext);

  return (
    <>
      {loading && (
        <Spinner
          animation="border"
          role="status"
          style={{
            display: "flex",
            alignItems: "center",
            margin: "150px auto",
          }}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {error && (
        <h1
          className="text-danger"
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "150px",
            justifyContent: "center",
            whiteSpace: "nowrap",
          }}
        >
          {error}
        </h1>
      )}
      {seccesRenderPage && !seccesFully && !errorRegistered && (
        <div style={{marginTop: "70px", textAlign: "center"}}>
        <Button as={Link} to="/login" variant="outline-primary">
          برای افزودن کتاب دلخواه وارد شوید
        </Button>
        </div>
      )}
      {books.length === 0 && seccesRenderPage && (
        <div className="empty-book">
          <p className="empty-book-notice">!هیچ کتابی وجود ندارد</p>
        </div>
      )}
      <main className="img-countainer">
        {books.length > 0 &&
          books.map((book) => <BookItem key={book.id} book={book.name} />)}
      </main>
    </>
  );
}
