import "./Login.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormContext } from "../Contex/FormContext";
import { Schema } from "../Components/Schema";
import { useContext } from "react";

export default function Login() {
  const { onSubmit, errorUsers, seccesFully, errorRegistered } =
    useContext(FormContext);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(Schema)});

  return (
    <>
      <main className="login-container">
        <div className="login-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
          </div>
        </div>

        <div className="login-form-wrapper">
          <div className="login-form-container">
            <div className="form-header">
              <h1 className="form-title">خوش آمدید</h1>
              <p className="form-subtitle">
                شما میتوانید با حساب خود وارد شوید
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className={`login-form ${isSubmitting ? "submitting" : ""}`}
            >
              <div className="input-group">
                <label htmlFor="userName" className="field-label">
                  <span className="label-text">نام کاربری: </span>
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="userName"
                    name="userName"
                    required
                    disabled={isSubmitting || seccesFully}
                    {...register("userName")}
                  />
                  {errors.userName && <p>{errors.userName.message}</p>}
                  <div className="input-highlight"></div>
                  <div className="input-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="email" className="field-label">
                  <span className="label-text">ایمیل: </span>
                </label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={isSubmitting || seccesFully}
                    {...register("email")}
                  />
                  {errors.email && <p>{errors.email.message}</p>}
                  <div className="input-highlight"></div>
                  <div className="input-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="password" className="field-label">
                  <span className="label-text">رمز ورود: </span>
                </label>
                <div className="input-wrapper">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    disabled={isSubmitting || seccesFully}
                    {...register("password")}
                  />
                  {errors.password && <p>{errors.password.message}</p>}
                  <div className="input-highlight"></div>
                  <div className="input-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="birthDate" className="field-label">
                  <span className="label-text">تاریخ تولد به میلادی: </span>
                </label>
                <div className="input-wrapper">
                  <input
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    required
                    disabled={isSubmitting || seccesFully}
                    {...register("birthDate")}
                  />
                  {errors.birthDate && <p>{errors.birthDate.message}</p>}
                  <div className="input-highlight"></div>
                  <div className="input-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? "loading" : ""}`}
                disabled={isSubmitting || seccesFully}
              >
                <span className="btn-text">
                  <span className="btn-text-normal">ورود</span>
                  <span className="btn-text-loading">Loading...</span>
                </span>
                <div className="btn-ripple"></div>
                <div className="btn-glow"></div>
                {isSubmitting && <div className="btn-spinner"></div>}
              </button>
              {errorRegistered && (
                <p style={{ textAlign: "center" }} className="text-success">{errorRegistered}</p>
              )}
              {seccesFully && (
                <div style={{ textAlign: "center" }}>
                  <p>عملیات با موفقیت انجام شد</p>
                  {/* <Button
                    variant="outline-info"
                    onClick={() => window.location.reload()}
                  >
                    تایید
                  </Button> */}
                </div>
              )}
              {errorUsers && (
                <p style={{ textAlign: "center", color: "red" }}>
                  {errorUsers}
                </p>
              )}
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
