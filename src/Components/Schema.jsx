import * as yup from "yup";

export const Schema = yup.object().shape({
    userName: yup
      .string()
      .min(3, "نام کاربری حداقل میتواند 3 کاراکتر باشد")
      .required(),
    email: yup
      .string()
      .typeError("ایمیل باید درست باشد")
      .email("ایمیل نامعتبر")
      .required("وارد کردن ایمیل اجباری است"),
    password: yup
      .string()
      .min(8, "حداقل پسورد 8 کاراکتر")
      .max(50, "حداکثر پسورد 50 کاراکتر")
      .matches(/[a-z]/, "پسورد حداقل باید دارای حروف انگلیسی کوچک باشد ")
      .matches(/[A-Z]/, "پسورد حداقل باید دارای حروف انگلیسی بزرگ باشد ")
      .matches(/\d+/, "پسورد باید حداقل دارای یک عدد باشد")
      .required(),
    birthDate: yup
      .date()
      .max(new Date(), "تاریج تولد وارد شده نباید در اینده باشد")
      .required("وارد کردن این فیلد اجباری است"),
  });