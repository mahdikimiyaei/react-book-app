import { useNavigate, useParams } from "react-router-dom";
import EditBookForm from "./EditBookForm";
import { useContext } from "react";
import axios from "axios";
import { EditBookContext } from "../Contex/EditBookContext";
import { Spinner } from "react-bootstrap";
import "./EditBook.css";

export default function EditBook() {
  const Navigate = useNavigate();
  const {
    editBook,
    loadingEditPage,
    errorEditPage,
    setLoadingUpdateBook,
    loadingUpdatebook,
    errorUpdateBook,
    setErrorUpdateBook,
  } = useContext(EditBookContext);
  const { id } = useParams();
  const book = editBook.find((b) => b.id === id);

  // تابع ویرایش کتاب
  const onEditBook = async (data) => {
    // اگر کتاب پیدا نشد کاری نکن
    setLoadingUpdateBook(true);
    setErrorUpdateBook("");
    try {
      const res = await axios.put(
        `http://localhost:3002/books/${book.id}`,
        data
      );
      if (res.data) {
        Navigate("/");
      }
    } catch (error) {
      console.error(error);
      setErrorUpdateBook(error.message);
    } finally {
      setLoadingUpdateBook(false);
    }
  };

  return (
    <section className="edit-book-section">
      {loadingEditPage && (
        <div className="loading-container">
          <Spinner animation="border" role="status" className="loading-spinner">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {errorEditPage && (
        <div className="error-container">
          <h3 className="text-danger">{errorEditPage}</h3>
        </div>
      )}
      {loadingUpdatebook && (
        <div className="loading-container">
          <Spinner animation="border" role="status" className="loading-spinner">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {errorUpdateBook && (
        <div className="error-container">
          <h3 className="text-danger">{errorUpdateBook}</h3>
        </div>
      )}

      {/* چک کردن وجود کتاب */}
      {book ? (
        <section className="edit-book-content">
          <div className="edit-book-details">
            <h2>اطلاعات کتاب</h2>
            <p>
              عنوان: <b>{book.title}</b>
            </p>
            <p>
              نویسنده: <b>{book.author}</b>
            </p>
            <p>
              سال انتشار: <b>{book.year}</b>
            </p>
            <div className="book-image-container">
              <img
                src={`/Images/${book.image}`}
                className="book-image"
                alt={book.title}
              />
            </div>
          </div>
          <div className="edit-book-form-container">
            <EditBookForm onEditBook={onEditBook} />
          </div>
        </section>
      ) : (
        <p>در حال بارگذاری اطلاعات کتاب...</p>
      )}
    </section>
  );
}
