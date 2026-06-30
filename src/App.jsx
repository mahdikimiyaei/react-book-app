import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import NotFound from "./Pages/NotFound";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import BookDetail from "./Pages/BookDetail";
import { BooksContext } from "./Contex/BooksContext";
import Login from "./Pages/Login";
import { FormContext } from "./Contex/FormContext";
import AddBook from "./Pages/AddBook";
import { BookFormContext } from "./Contex/BookFormContext";
import EditBook from "./Pages/EditBook";
import { EditBookContext } from "./Contex/EditBookContext";
import Footer from "./Components/Footer";
import { SearchContext } from "./Contex/SearchContext";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [books, setBooks] = useState([]);
  const [bookDetails, setBookDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [seccesRenderPage, setSeccesRenderPage] = useState(false);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [errorDetails, setErrorDetails] = useState("");
  const [errorUsers, setErrorUsers] = useState("");
  const [seccesFully, setSeccesFully] = useState(false);
  const [errorRegistered, setErrorRegistered] = useState("");
  const [errorAddBook, setErrorAddBook] = useState("");
  const [seccesFullyAddBook, setSeccesFullyAddBook] = useState(false);
  const [seceesDelletBook, setSeccesDelletBook] = useState(false);
  const [errorDelletBook, setErrorDelletBook] = useState("");
  const [editBook, setEditBook] = useState([]);
  const [loadingEditPage, setLoadingEditPage] = useState(false);
  const [errorEditPage, setErrorEditPage] = useState("");
  const [loadingUpdatebook, setLoadingUpdateBook] = useState(false);
  const [errorUpdateBook, setErrorUpdateBook] = useState("");
  const [searchBook, setSearchBook] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [seccesFullySearch, setSeccesFullySearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get("http://localhost:3002/books");
        if (res.status === 200) {
          setSeccesRenderPage(true);
          const newEntry = res.data.map((book) => ({
            id: uuidv4(),
            name: book,
          }));
          setBooks(newEntry);
          console.log(res.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const savedBookDetails = localStorage.getItem("books");
    if (savedBookDetails) {
      setBookDetails(JSON.parse(savedBookDetails));
    }
    const savedUser = localStorage.getItem("usersListDatassssss");
    if (savedUser) {
      setErrorRegistered(savedUser);
    }
    const savedEditItem = localStorage.getItem("editBookList");
    if (savedEditItem) {
      setEditBook(JSON.parse(savedEditItem));
    }
  }, []);

  const showDetails = async (id) => {
    setLoadingDetails(true);
    setErrorDetails("");
    setBookDetails([]);
    try {
      const res = await axios.get(`http://localhost:3002/books/${id}`);
      if (res.status === 200) {
        setBookDetails([res.data]);
        localStorage.setItem("books", JSON.stringify([res.data]));
      }
    } catch (error) {
      console.error(error);
      setErrorDetails(error.message);
    } finally {
      setLoadingDetails(false);
    }
  };

  const onSubmit = async (data) => {
    if (errorRegistered) {
      return;
    }
    setErrorUsers("");
    try {
      const res = await axios.post("http://localhost:3003/users", data);
      console.log(res);
      if (res.status === 201) {
        setSeccesFully(true);
        localStorage.setItem("usersListDatassssss", "شما ثبت نام شده اید");
      }
    } catch (error) {
      console.error(error);
      setErrorUsers(error.message);
    }
  };

  const delletBook = async (id) => {
    setErrorDelletBook("");
    try {
      const res = await axios.delete(`http://localhost:3002/books/${id}`);
      if (res.data) {
        setSeccesDelletBook(true);
      }
    } catch (error) {
      console.error(error.message);
      setErrorDelletBook(error.message);
    }
  };

  const onClickEditButton = async (id) => {
    setLoadingEditPage(true);
    setErrorEditPage("");
    try {
      const res = await axios.get(`http://localhost:3002/books/${id}`);
      if (res.status === 200) {
        setEditBook([res.data]);
        localStorage.setItem("editBookList", JSON.stringify([res.data]));
        console.log(res.data);
        console.log(editBook);
      }
    } catch (error) {
      console.error(error);
      setErrorEditPage(error.message);
    } finally {
      setLoadingEditPage(false);
    }
  };

  const onSearch = async () => {
    if (!searchBook.trim()) {
      return;
    }

    setSearchLoading(true);
    setSearchError("");
    setSeccesFullySearch("");
    try {
      const res = await axios.get(
        `http://localhost:3002/books?title=${searchBook}`
      );
      if (res.data.length > 0) {
        const newEntry = res.data.map((book) => ({
          id: uuidv4(),
          name: book,
        }));
        setBooks(newEntry);
        setSearchBook("");
      } else {
        setSeccesFullySearch("!کتابی پیدا نشد");
      }
    } catch (error) {
      console.error(error);
      setSearchError(error.message);
    } finally {
      setSearchLoading(false);
    }
  };

  const booksContextValues = {
    books,
    setBooks,
    editBook,
    seccesRenderPage,
    loading,
    error,
    showDetails,
    bookDetails,
    loadingDetails,
    errorDetails,
    delletBook,
    errorDelletBook,
  };

  return (
    <>
      <BooksContext.Provider value={booksContextValues}>
        <FormContext.Provider
          value={{
            onSubmit,
            errorUsers,
            seccesFully,
            errorRegistered,
          }}
        >
          <BookFormContext.Provider
            value={{
              errorAddBook,
              seccesFullyAddBook,
              setErrorAddBook,
              setSeccesFullyAddBook,
            }}
          >
            <EditBookContext.Provider
              value={{
                editBook,
                onClickEditButton,
                loadingEditPage,
                errorEditPage,
                setLoadingUpdateBook,
                loadingUpdatebook,
                errorUpdateBook,
                setErrorUpdateBook,
              }}
            >
              <SearchContext.Provider
                value={{
                  searchLoading,
                  searchError,
                  onSearch,
                  searchBook,
                  setSearchBook,
                  seccesFullySearch,
                }}
              >
                <Router>
                  <Header />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Navigate replace to="/" />} />
                    <Route path="/book/:id" element={<BookDetail />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/addBook" element={<AddBook />} />
                    <Route path="/edit/:id" element={<EditBook />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                  <Footer />
                </Router>
              </SearchContext.Provider>
            </EditBookContext.Provider>
          </BookFormContext.Provider>
        </FormContext.Provider>
      </BooksContext.Provider>
    </>
  );
}
