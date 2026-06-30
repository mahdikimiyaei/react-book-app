export default function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="error-code">
          <span className="four">4</span>
          <span className="zero">0</span>
          <span className="four">4</span>
        </div>
        <div className="error-message">
          <h2>!صفحه ای پیدا نشد</h2>
          <p>.صفحه ای به این نام وجود ندارد</p>
        </div>
        <button className="home-button" onClick={() => window.history.back()}>
          برگشت
        </button>
      </div>
    </div>
  );
}
