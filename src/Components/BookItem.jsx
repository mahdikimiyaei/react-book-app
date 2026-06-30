import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { BooksContext } from "../Contex/BooksContext";
import { FormContext } from "../Contex/FormContext";
import { EditBookContext } from "../Contex/EditBookContext";

export default function BookItem({ book }) {
  const { showDetails, delletBook, errorDelletBook } = useContext(BooksContext);
  const { errorRegistered } = useContext(FormContext);
  const { onClickEditButton } = useContext(EditBookContext);

  return (
    <>
      <main>
        <Card style={{ width: "100%" }}>
          <Card.Img
            variant="top"
            src={`/Images/${book.image}`}
            alt={book.title}
            className="animals-img"
          />
          <ListGroup className="list-group-flush" style={{ direction: "rtl" }}>
            <ListGroup.Item>{book.title}</ListGroup.Item>
            <ListGroup.Item>{book.author}</ListGroup.Item>
            <ListGroup.Item>{book.year}</ListGroup.Item>
          </ListGroup>
          <Card.Body className="buttons">
            {errorRegistered && (
              <div className="buttons">
                <Button variant="danger" onClick={() => delletBook(book.id)}>
                  حذف
                </Button>
                {errorDelletBook && <p>{errorDelletBook}</p>}
                <Button
                  variant="primary"
                  as={Link}
                  to={`/edit/${book.id}`}
                  onClick={() => onClickEditButton(book.id)}
                >
                  ویرایش
                </Button>
              </div>
            )}
            <Button
              variant="info"
              as={Link}
              to={`/book/${book.id}`}
              onClick={() => showDetails(book.id)}
            >
              جزعیات
            </Button>
          </Card.Body>
        </Card>
      </main>
    </>
  );
}
