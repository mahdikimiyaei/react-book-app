import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema2 } from "./Schema2";
import { useContext } from "react";
import { BookFormContext } from "../Contex/BookFormContext";
import { FormText } from "react-bootstrap";

export default function BookForm({onBookForm}) {
  
  const {
    errorAddBook,
    seccesFullyAddBook,
  } = useContext(BookFormContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(Schema2),
  });

  return (
    <>
      <Form
        onSubmit={handleSubmit(onBookForm)}
        className="book-form-countainer"
      >
        <Form.Group className="mb-3 " controlId="formBasicText">
          <Form.Label>عنوان کتاب: </Form.Label>
          <Form.Control
            type="text"
            className="book-form"
            {...register("title")}
            required
          />
          {errors.title && (
            <Form.Text className="text-danger" style={{ fontSize: "16px" }}>
              {errors.title.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>نویسنده کتاب: </Form.Label>
          <Form.Control
            type="text"
            className="book-form"
            {...register("author")}
            required
          />
          {errors.author && (
            <Form.Text className="text-danger" style={{ fontSize: "16px" }}>
              {errors.author.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>سال انتشار: </Form.Label>
          <Form.Control
            type="number"
            className="book-form"
            {...register("year")}
            required
          />
          {errors.year && (
            <FormText className="text-danger" style={{ fontSize: "16px" }}>
              {errors.year.message}
            </FormText>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>آدرس عکس : اختیاری با انتخاب</Form.Label>
          <Form.Select
            className="book-form"
            {...register("image")}
            aria-label="آدرس عکس کتاب"
          > 
            <option value="" style={{color: "red"}}>انتخاب تصویر</option>
            <option value="content.jpg">قلعه حیوانات</option>
            <option value="shazdeh.jpg">شازده کوچولو</option>
            <option value="father in low.jpg">پدر پول دار و فقیر</option>
            <option value="kimiyaGar.jpg">کیمیاگر</option>
            <option value="blind-owl.jpg">بوف کور</option>
            <option value="nathorDasht.jpg">ناطور دشت</option>
            <option value="onehanderedyers.jpg">صد سال تنهایی</option>
            <option value="wisely_human.jpg">انسان خردمند</option>
          </Form.Select>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          disabled={isSubmitting}
          style={{
            marginTop: "20px",
            width: "110px",
            height: "25px",
            fontSize: "18px",
            whiteSpace: "nowrap",
            padding: "20px 120px 45px 30px",
          }}
        >
          {isSubmitting ? "Loading..." : "افزودن کتاب"}
        </Button>

        {errorAddBook && <p style={{ color: "red" }}>{errorAddBook}</p>}
        {seccesFullyAddBook && (
          <p style={{ color: "green" }}>کتاب با موفقیت اضافه شد.</p>
        )}
      </Form>
    </>
  );
}
