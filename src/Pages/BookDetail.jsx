import { useParams } from "react-router-dom";
import { useContext } from "react";
import { BooksContext } from "../Contex/BooksContext";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

export default function BookDetail() {
  const { id } = useParams();
  const { bookDetails, loadingDetails, errorDetails } =
    useContext(BooksContext);
  const navigate = useNavigate();

  const book = bookDetails.find((b) => b.id === id);
  return (
    <section>
      <div
        style={{
          width: "45px",
          display: "flex",
          margin: "100px auto",
          height: "0",
        }}
      >
        {loadingDetails && (
          <Spinner
            animation="border"
            role="status"
            style={{ display: "flex", margin: "120px auto" }}
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </div>
      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          justifyContent: "center",
          margin: "120px auto",
        }}
      >
        {errorDetails && <h3 className="text-danger">{errorDetails}</h3>}
      </div>
      {bookDetails.length > 0 && (
        <main
          style={{ direction: "rtl", marginRight: "20px", marginLeft: "500px",marginTop: "-275px" }}
        >
          <p style={{ marginTop: "140px" }}>
            <b style={{ fontSize: "2rem" }}>عنوان:{book.title}</b>
          </p>
          <strong>سال انتشار: {book.year}</strong>
          <div style={{ marginTop: "10px" }}>
            <strong>نویسنده: {book.author}</strong>
          </div>
          <div style={{ width: "25%" }}>
            <img
              src={`/Images/${book.image}`}
              alt={book.title}
              style={{ width: "24vw", marginTop: "25px" }}
            />
          </div>
          {/* <div style={{ marginTop: "20px" }}>
            <strong>توضیحات :</strong>
            <p style={{ fontSize: "18px", fontFamily: "tahoma" }}>
              {book.description}
            </p>
          </div> */}
        </main>
      )}
      <div style={{ margin: "10px 0 10px 0", textAlign: "center" }}>
        <Button onClick={() => navigate("/")} variant="primary">
          بازگشت به صفحه اصلی
        </Button>
      </div>
    </section>
  );
}
