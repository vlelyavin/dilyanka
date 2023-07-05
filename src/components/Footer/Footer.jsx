import { Link, useNavigate } from "react-router-dom";
import { Container } from "../Container/Container";
import "./Footer.scss";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <div className="footer__column">
            <Link to="/" className="footer__column__logo logo">
              Da!
            </Link>
            <Link to="/" className="footer__column__sublogo">
              Dilyanka
            </Link>
            <div className="footer__column__copyright">
              Dilyanka 2023,
              <br /> all rights reserved
            </div>
          </div>
          <div className="footer__column">
            <Link to="/#whyUs" className="footer__column__link">
              Чому Dilyanka
            </Link>
          </div>
          <div className="footer__column">
            <Link to="/#about" className="footer__column__link">
              Dilyanka. Хто ми?
            </Link>
          </div>
          <div className="footer__column">
            <Link to="/#stages" className="footer__column__link">
              Етапи роботи
            </Link>
          </div>
          <div className="footer__column">
            <Link to="/catalog" className="footer__column__link">
              Каталог ділянок
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
