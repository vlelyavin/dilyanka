import { useEffect, useRef, useState } from "react";
import slide2 from "../../../assets/images/land1Krasnyuk/intro.webp";
import slide3 from "../../../assets/images/land2Bistriuk/intro.webp";
import slide4 from "../../../assets/images/land3Krasnyuk/intro.webp";
import slide5 from "../../../assets/images/land4Krasnyuk/intro.webp";
import "./Banner.scss";
import { Container } from "../../../components/Container/Container";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";

export const Banner = () => {
  const slides = [slide2, slide3, slide4, slide5];
  const observer = useInView({ threshold: 0.3 });
  const modalContainerRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isFullscreen]);

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => clampSlideIndex(prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => clampSlideIndex(prevSlide + 1));
  };

  const toggleFullScreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const clampSlideIndex = (index) => {
    if (index < 0) {
      return 0;
    } else if (index >= slides.length) {
      return slides.length - 1;
    }
    return index;
  };

  const scrollToContact = () => {
    const form = document.querySelector(".contact");
    form.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="section banner">
      <Container>
        <div className="banner__inner">
          <p className="banner__text__upper">
            Dilyanka - Ваш надійний
            <br /> партнер у виборі землі!
          </p>
          <div className="banner__title__container">
            <h1 className={classNames("banner__title", { animate: observer.inView })} ref={observer.ref}>
              Dilyanka
            </h1>
          </div>

          <div className="banner__row">
            <div
              className={classNames("banner__row__button button", { animate: observer.inView })}
              onClick={scrollToContact}
            >
              <svg
                className="button__icon"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M59.5832 46.0476C59.5805 53.8229 54.1167 60.3216 46.8193 61.9168L45.0914 56.733C48.3523 56.2009 51.1237 54.2129 52.7173 51.4583H46.0415C43.0499 51.4583 40.6248 49.0333 40.6248 46.0416V35.2083C40.6248 32.2167 43.0499 29.7916 46.0415 29.7916H53.9989C52.6661 19.1037 43.5488 10.8333 32.4998 10.8333C21.4509 10.8333 12.3336 19.1037 11.0008 29.7916H18.9582C21.9497 29.7916 24.3748 32.2167 24.3748 35.2083V46.0416C24.3748 49.0333 21.9497 51.4583 18.9582 51.4583H10.8332C7.84163 51.4583 5.4165 49.0333 5.4165 46.0416V32.5C5.4165 17.5422 17.5421 5.41663 32.4998 5.41663C47.4574 5.41663 59.5832 17.5422 59.5832 32.5V35.2048V35.2083V46.0416V46.0476Z"
                  fill="white"
                />
              </svg>
              Звязатись
              <br /> з нами
            </div>
            <p className={classNames("banner__row__text", { animate: observer.inView })}>
              Відкрийте для себе незабутній світ природи та затишку у <span style={{ fontWeight: 500 }}>Карпатах</span>
            </p>
            <div className="banner__row__slider">
              <svg
                className="banner__row__slider__icon"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={toggleFullScreen}
              >
                <path
                  d="M29.3332 5.5H40.3332V16.5H36.6665V9.16667H29.3332V5.5ZM3.6665 5.5H14.6665V9.16667H7.33317V16.5H3.6665V5.5ZM36.6665 34.8333V27.5H40.3332V38.5H29.3332V34.8333H36.6665ZM7.33317 34.8333H14.6665V38.5H3.6665V27.5H7.33317V34.8333Z"
                  fill="white"
                />
              </svg>

              {slides?.map((slide, idx) => (
                <>
                  <div
                    className={classNames("banner__modal__container", { fullscreen: isFullscreen })}
                    ref={modalContainerRef}
                  >
                    <div className="banner__modal__container__inner">
                      <svg
                        className="banner__modal__icon"
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={toggleFullScreen}
                      >
                        <path
                          d="M29.3332 5.5H40.3332V16.5H36.6665V9.16667H29.3332V5.5ZM3.6665 5.5H14.6665V9.16667H7.33317V16.5H3.6665V5.5ZM36.6665 34.8333V27.5H40.3332V38.5H29.3332V34.8333H36.6665ZM7.33317 34.8333H14.6665V38.5H3.6665V27.5H7.33317V34.8333Z"
                          fill="white"
                        />
                      </svg>
                      <img src={slide} alt="slide" className="banner__modal__image" />
                    </div>
                  </div>
                  <img
                    src={slide}
                    alt="slide"
                    key={idx}
                    className="banner__row__slide"
                    style={{
                      transform: `translateX(-${currentSlide * 100}%)`, // Adjust the percentage based on the width of each slide
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />
                </>
              ))}
              <div className="banner__row__slider__arrows">
                <div className="banner__row__slider__arrow left" onClick={goToPrevSlide}>
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.1816 13.5013L17.75 7.93278L16.159 6.3418L8.9995 13.5013L16.159 20.6607L17.75 19.0697L12.1816 13.5013Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="banner__row__slider__arrow right" onClick={goToNextSlide}>
                  <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22.5007 20.5007L14.0449 12.0448L16.4609 9.62891L27.3327 20.5007L16.4609 31.3724L14.0449 28.9564L22.5007 20.5007Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
