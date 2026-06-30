import "../App.css";
import BookCard from "../Components/BookCard";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaSearch } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { BooksContext } from "../Contex/BooksContext";
import { SearchContext } from "../Contex/SearchContext";

export default function Home() {
  const { loading, error, books } = useContext(BooksContext);
  const {
    searchLoading,
    searchError,
    onSearch,
    searchBook,
    setSearchBook,
    seccesFullySearch,
  } = useContext(SearchContext);

  return (
    <section>
      <div
        className={
          (books.length === 0 && "link-login") || 
          (loading && "link-login") ||
          (error && "link-login") 
        }
      >
        <InputGroup className="serch-countainer">
          <Form.Control
            type="search"
            placeholder="جستجو..."
            className="search-input"
            aria-label="Search"
            onChange={(e) => setSearchBook(e.target.value)}
            value={searchBook}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSearch();
              }
            }}
          />
          <Button
            variant="primary"
            className="search-button"
            onClick={onSearch}
          >
            {searchLoading ? "Loading..." : "جستجو"}
            <div className="fa-search">
              <FaSearch />
            </div>
          </Button>
        </InputGroup>
      </div>
      {seccesFullySearch && (
        <div
          style={{ textAlign: "center", fontSize: "25px", marginTop: "20px" }}
        >
          <p className="text-bg-danger">{seccesFullySearch}</p>
        </div>
      )}
      {searchError && (
        <div>
          <p className="text-danger">{searchError}</p>
        </div>
      )}
      <main>
        <BookCard />
      </main>
    </section>
  );
}
