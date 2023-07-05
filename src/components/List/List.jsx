import { Container } from "../Container/Container";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { areas } from "../../constants/constants";
import "./List.scss";

export const List = ({ dark }) => {
  const listItemFirstRef = useRef();
  const observer = useInView({ threshold: 0.2 });

  useEffect(() => {
    const list = document.querySelector(".list");
    const items = document.querySelectorAll(".list__item");
    const handleScroll = (e) => {
      items.forEach((item, idx) => {
        const coords = item.getBoundingClientRect().top;
        if (coords < 800) {
          const positionY = window.pageYOffset - list.offsetTop - item.offsetTop;
          item.style.transform = `scale(${1 - positionY / 3000 >= 1 ? 1 : 1 - positionY / 3000}) rotateX(-${
            positionY / 80
          }deg)`;
        } else {
          item.style.transform = "unset";
        }
      });
    };
    const header = document.querySelector(".header");
    // const headerLower = document.querySelector(".header__lower");
    if (observer.inView) {
      header.style.background = "rgba(0,0,0,0.5)";
      // headerLower.style.background = "rgba(88, 136, 71,0.5)";
      window.addEventListener("scroll", handleScroll);
    } else {
      header.style.background = "#111111";
      // headerLower.style.background = "#588847";
      window.removeEventListener("scroll", handleScroll);
    }
  }, [observer.inView]);
  useEffect(() => {
    const list = document.querySelector(".list");
    const items = document.querySelectorAll(".list__item");
    items.forEach((item, idx) => {
      const coords = item.getBoundingClientRect().top;
      if (coords < 800) {
        const positionY = window.pageYOffset - list.offsetTop - item.offsetTop;
        item.style.transform = `scale(${1 - positionY / 3000 >= 1 ? 1 : 1 - positionY / 3000})`;
      } else {
        item.style.transform = "unset";
      }
    });
  }, []);

  const handleLinkClick = (e, area) => {
    localStorage.setItem("selectedArea", JSON.stringify(area));
  };

  return (
    <section className="list" ref={observer.ref}>
      <div className={classNames("list__row section", { dark: dark })}>
        <Container>
          <div className="list__row__inner">
            <div className={classNames("list__row__button", { dark: dark })}>
              {dark ? (
                <Link to="/">
                  Повернутися
                  <br /> на головну
                </Link>
              ) : (
                <Link to="/catalog" className="button">
                  <svg
                    className="button__icon"
                    width="63"
                    height="63"
                    viewBox="0 0 63 63"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.5 7.875V13.125H7.875V7.875H31.5ZM42 49.875V55.125H7.875V49.875H42ZM57.75 28.875V34.125H7.875V28.875H57.75Z"
                      fill="white"
                    />
                  </svg>
                  Перейти до
                  <br /> каталогу
                </Link>
              )}
            </div>
            <div className={classNames("list__row__title section__title", { dark: dark, animate: observer.inView })}>
              <span style={{ fontStyle: "italic", fontWeight: 500 }}>Dilyanka</span> в<br /> наявності
            </div>
          </div>
        </Container>
      </div>
      <div className="list__items" ref={observer.ref}>
        {areas?.map((area, idx) => (
          <div className="list__item" ref={listItemFirstRef} key={idx}>
            <div className="list__item__inner">
              <div className="list__item__info">
                <Link to="/product" className="list__item__title" onClick={(e) => handleLinkClick(e, area)}>
                  {area.generalInfo.title}
                </Link>
                <div className="list__item__text">
                  <svg
                    className="list__item__text__icon"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.16732 14.9458C5.87873 14.5357 3.33398 11.7304 3.33398 8.33073C3.33398 4.64883 6.31875 1.66406 10.0007 1.66406C13.6826 1.66406 16.6673 4.64883 16.6673 8.33073C16.6673 11.7304 14.1226 14.5357 10.834 14.9458V17.4974H9.16732V14.9458ZM4.16732 18.3307H15.834V19.9974H4.16732V18.3307Z"
                      fill="#488632"
                    />
                  </svg>
                  <p dangerouslySetInnerHTML={{ __html: area.generalInfo.address }}></p>
                </div>
                <Link to="/product" className="list__item__icon__container" onClick={(e) => handleLinkClick(e, area)}>
                  <svg
                    className="list__item__icon"
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M37.3818 21.9665L17.2998 42.0485L14 38.7487L34.082 18.6667H16.3819V14H42.0485V39.6667H37.3818V21.9665Z"
                      fill="black"
                    />
                  </svg>
                </Link>
              </div>
              <div className="list__item__image__container">
                <img src={area.generalInfo.image} alt="listImage" className="list__item__image" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
