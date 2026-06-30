import BookForm from "../Components/BookForm";
import { useNavigate } from "react-router-dom";
import { BookFormContext } from "../Contex/BookFormContext";
import axios from "axios";
import { useContext } from "react";

export default function AddBook() {
  const { setErrorAddBook, setSeccesFullyAddBook } =
    useContext(BookFormContext);

  const navigate = useNavigate();

  const onBookForm = async (data) => {
    setErrorAddBook("");
    try {
      const res = await axios.post("http://localhost:3002/books", data);
      if (res.status === 201) {
        setSeccesFullyAddBook(true);
        navigate("/");
      }
      console.log(res.data);
    } catch (error) {
      console.error(error);
      setErrorAddBook(error.message);
    }
  };

  return (
    <section>
      <main>
        <BookForm onBookForm={onBookForm} />
      </main>
    </section>
  );
}
