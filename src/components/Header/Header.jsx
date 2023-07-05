import { Link } from "react-router-dom";
import { Container } from "../Container/Container";
import "./Header.scss";
import { useEffect, useState } from "react";
import classNames from "classnames";

export const Header = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const [isLowerVisible, setIsLowerVisible] = useState(true);
  const scrollToContact = () => {
    const form = document.querySelector(".contact");
    form.scrollIntoView({ behavior: "smooth" });
  };

  const handleCloseMenu = () => {
    if (window.innerWidth > 600) {
      setMenuVisibility(false);
    }
  };

  const handleScroll = (e) => {
    if (window.innerWidth > 600) {
      if (e.deltaY > 0) {
        setIsLowerVisible(false);
      } else {
        setIsLowerVisible(true);
      }
    } else {
      setMenuVisibility(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleCloseMenu);
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("resize", handleCloseMenu);
    };
  }, []);
  return (
    <>
      <header className="header">
        <Container>
          <div className="header__inner">
            <div className="header__left">
              <Link to="/" className="header__logo logo">
                Da!
              </Link>
              <div className="header__links">
                <Link to="/catalog" className="header__link">
                  Каталог ділянок
                </Link>
              </div>
            </div>
            <div className="header__button" onClick={scrollToContact}>
              Зв'язатись з нами
            </div>
            <div className="header__menu__container">
              <div
                onClick={() => setMenuVisibility(!isMenuVisible)}
                className={classNames("header__menu", { menuIconTrasform: isMenuVisible })}
              >
                <div className="header__menu__line"></div>
                <div className="header__menu__line"></div>
                <div className="header__menu__line"></div>
              </div>
            </div>
          </div>
        </Container>
      </header>
      <div className={classNames("header__lower", { visible: isLowerVisible })}>
        <div className="header__lower__content">
          <div className="header__lower__content__line">
            <svg
              className="header__lower__content__line__icon"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.37516 2.375H16.6252C17.0624 2.375 17.4168 2.72945 17.4168 3.16667V15.8333C17.4168 16.2706 17.0624 16.625 16.6252 16.625H2.37516C1.93794 16.625 1.5835 16.2706 1.5835 15.8333V3.16667C1.5835 2.72945 1.93794 2.375 2.37516 2.375ZM9.54814 9.24896L4.47088 4.93818L3.44611 6.14515L9.55803 11.3344L15.5599 6.14029L14.5238 4.94304L9.54814 9.24896Z"
                fill="white"
              />
            </svg>
            <a href="mailto:dilyankaaa@gmail.com" className="header__lower__content__line__text">
              dilyankaaa@gmail.com
            </a>
          </div>
          <div className="header__lower__content__line">
            <svg
              className="header__lower__content__line__icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3332 14.1683C18.3323 16.5608 16.6512 18.5603 14.4058 19.0512L13.8742 17.4562C14.8775 17.2924 15.7303 16.6808 16.2206 15.8332H14.1665C13.246 15.8332 12.4998 15.087 12.4998 14.1665V10.8332C12.4998 9.91267 13.246 9.1665 14.1665 9.1665H16.6149C16.2048 5.87791 13.3995 3.33317 9.99984 3.33317C6.60015 3.33317 3.79483 5.87791 3.38475 9.1665H5.83317C6.75365 9.1665 7.49984 9.91267 7.49984 10.8332V14.1665C7.49984 15.087 6.75365 15.8332 5.83317 15.8332H3.33317C2.4127 15.8332 1.6665 15.087 1.6665 14.1665V9.99984C1.6665 5.39746 5.39746 1.6665 9.99984 1.6665C14.6022 1.6665 18.3332 5.39746 18.3332 9.99984V10.8321V10.8332V14.1665V14.1683Z"
                fill="white"
              />
            </svg>
            <a href="tel:+380953158011" className="header__lower__content__line__text">
              +38 (095) 315 80 11
            </a>
          </div>
        </div>
      </div>
      <div className={classNames("menu", { menuVisible: isMenuVisible })}>
        <Link to="/catalog" className="header__link">
          Каталог ділянок
        </Link>
        <div className="header__button" onClick={scrollToContact}>
          Зв'язатись з нами
        </div>
        <div className="header__lower__content__line">
          <svg
            className="header__lower__content__line__icon"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.37516 2.375H16.6252C17.0624 2.375 17.4168 2.72945 17.4168 3.16667V15.8333C17.4168 16.2706 17.0624 16.625 16.6252 16.625H2.37516C1.93794 16.625 1.5835 16.2706 1.5835 15.8333V3.16667C1.5835 2.72945 1.93794 2.375 2.37516 2.375ZM9.54814 9.24896L4.47088 4.93818L3.44611 6.14515L9.55803 11.3344L15.5599 6.14029L14.5238 4.94304L9.54814 9.24896Z"
              fill="white"
            />
          </svg>
          <a href="mailto:dilyankaaa@gmail.com" className="header__lower__content__line__text">
            dilyankaaa@gmail.com
          </a>
        </div>
        <div className="header__lower__content__line">
          <svg
            className="header__lower__content__line__icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3332 14.1683C18.3323 16.5608 16.6512 18.5603 14.4058 19.0512L13.8742 17.4562C14.8775 17.2924 15.7303 16.6808 16.2206 15.8332H14.1665C13.246 15.8332 12.4998 15.087 12.4998 14.1665V10.8332C12.4998 9.91267 13.246 9.1665 14.1665 9.1665H16.6149C16.2048 5.87791 13.3995 3.33317 9.99984 3.33317C6.60015 3.33317 3.79483 5.87791 3.38475 9.1665H5.83317C6.75365 9.1665 7.49984 9.91267 7.49984 10.8332V14.1665C7.49984 15.087 6.75365 15.8332 5.83317 15.8332H3.33317C2.4127 15.8332 1.6665 15.087 1.6665 14.1665V9.99984C1.6665 5.39746 5.39746 1.6665 9.99984 1.6665C14.6022 1.6665 18.3332 5.39746 18.3332 9.99984V10.8321V10.8332V14.1665V14.1683Z"
              fill="white"
            />
          </svg>
          <a href="tel:+380953158011" className="header__lower__content__line__text">
            +38 (095) 315 80 11
          </a>
        </div>
      </div>
    </>
  );
};
