import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Schema3 } from "../Components/Schema3";
import "./EditBookFormSimple.css";

export default function EditBookForm({ onEditBook }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(Schema3)
  });

  return (
    <div className="edit-book-form-wrapper">
      <div className="form-header">
        <h1 className="form-title">ویرایش کتاب</h1>
        <p className="form-subtitle">اطلاعات کتاب را ویرایش کنید</p>
      </div>

      <form onSubmit={handleSubmit(onEditBook)} className="edit-book-form">
        <div className="input-group">
          <label className="field-label">
            <span className="label-text">عنوان کتاب:</span>
          </label>
          <div className="input-wrapper">
            <input
              type="text"
              className="form-input"
              placeholder="نام کتاب را وارد کنید"
              {...register("title")}
              required
            />
            {errors.title && <p>{errors.title.message}</p>}
          </div>
        </div>

        <div className="input-group">
          <label className="field-label">
            <span className="label-text">نویسنده کتاب:</span>
          </label>
          <div className="input-wrapper">
            <input
              type="text"
              className="form-input"
              placeholder="نام نویسنده را وارد کنید"
              {...register("author")}
              required
            />
            {errors.author && <p>{errors.author.message}</p>}
          </div>
        </div>

        <div className="input-group">
          <label className="field-label">
            <span className="label-text">سال انتشار:</span>
          </label>
          <div className="input-wrapper">
            <input
              type="number"
              className="form-input"
              placeholder="سال انتشار را وارد کنید"
              {...register("year")}
              required
            />
            {errors.year && <p>{errors.year.message}</p>}
          </div>
        </div>
         <div className="input-group">
          <label className="field-label">
            <span className="label-text">تصویر: اختیاری</span>
          </label>
          <div className="input-wrapper">
            <select {...register("image")}>
            <option value="" style={{color: "red"}}>انتخاب تصویر</option>
            <option value="content.jpg">قلعه حیوانات</option>
            <option value="shazdeh.jpg">شازده کوچولو</option>
            <option value="father in low.jpg">پدر پول دار و فقیر</option>
            <option value="kimiyaGar.jpg">کیمیاگر</option>
            <option value="blind-owl.jpg">بوف کور</option>
            <option value="nathorDasht.jpg">ناطور دشت</option>
            <option value="onehanderedyers.jpg">صد سال تنهایی</option>
            <option value="wisely_human.jpg">انسان خردمند</option>
            </select>
          </div>
        </div>
        
        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          <span className="btn-text">
            {isSubmitting ? "Loading..." : "ویرایش کتاب"}
          </span>
        </button>
      </form>
    </div>
  );
}
