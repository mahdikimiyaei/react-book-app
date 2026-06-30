import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <Row className="footer-content">
          <Col md={4} className="footer-section">
            <h5>درباره ما</h5>
            <p>توضیحات درباره شرکت یا وبسایت</p>
          </Col>
          <Col md={4} className="footer-section">
            <h5>لینک‌های مفید</h5>
            <ul className="footer-links">
              <li>
                <span>تماس با ما</span>
              </li>
              <li>
                <span>درباره ما</span>
              </li>
            </ul>
          </Col>
          <Col md={4} className="footer-section">
            <h5>شبکه‌های اجتماعی</h5>
            <div className="social-icons">
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
