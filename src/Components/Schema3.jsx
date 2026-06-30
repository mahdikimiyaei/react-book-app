import * as yup from "yup";

export const Schema3 = yup.object().shape({
  title: yup
    .string()
    .typeError("این فیلد اجباری است")
    .matches(/^[^0-9]*$/, "شما نمی‌توانید عدد وارد کنید")
    .required("این فیلد اجباری است"),
  author: yup
    .string()
    .typeError("این فیلد اجباری است")
    .matches(/^[^0-9]*$/, "شما نمیتوانید عدد وارد کنید")
    .required("این فیلد اجباری است"),
  year: yup
    .number()
    .typeError("این فیلد اجباری است")
    .positive("شما نمیتوانید اعداد منفی و یا صفر وارد کنید")
    .integer("سال انتشار باید دارای اعداد مثبت باشد")
    .min(
      1300,
      "شما نمیتوانید سال انتشار کتاب را پایین تر از سال 1300 وارد کنید"
    )
    .max(2025, "سال انتشار کتاب نمیتواند بیشتر سال 2025 میلادی باشد")
    .required("این فیلد اجباری است"),
  image: yup.string(),
});
