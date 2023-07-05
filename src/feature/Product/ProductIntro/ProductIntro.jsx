import { useState } from "react";
import { Container } from "../../../components/Container/Container";
import "./ProductIntro.scss";
import classNames from "classnames";

export const ProductIntro = ({ slides, map, title, address, text }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => clampSlideIndex(prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => clampSlideIndex(prevSlide + 1));
  };

  const clampSlideIndex = (index) => {
    if (index < 0) {
      return slides.length - 1;
    } else if (index > slides.length) {
      return slides.length - 1;
    } else if (index === slides.length) {
      return 0;
    }
    return index;
  };

  const scrollToContact = () => {
    const form = document.querySelector(".contact");
    form.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="product__intro">
      <Container>
        <div className="product__intro__inner">
          <div className="product__intro__left">
            <div className="product__intro__slider">
              {slides?.map((slide, idx) => (
                <img
                  src={(idx === currentSlide - 1 || idx === currentSlide + 1 || idx === currentSlide) && slide}
                  alt="slide"
                  key={idx}
                  className={classNames("product__intro__slider__image")}
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`, // Adjust the percentage based on the width of each slide
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              ))}
              <div className="product__intro__slider__arrows">
                <div className="product__intro__slider__arrow left" onClick={goToPrevSlide}>
                  <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3.27279 8.38349L9 2.40834L7.36365 0.701172L0 8.38349L7.36365 16.0657L9 14.3586L3.27279 8.38349Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="product__intro__slider__arrow right" onClick={goToNextSlide}>
                  <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.72721 8.38349L0 2.40834L1.63635 0.701172L9 8.38349L1.63635 16.0657L0 14.3586L5.72721 8.38349Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="product__intro__slider__dots">
                {slides?.map((_, idx) => (
                  <div
                    key={idx}
                    className={classNames("dot", { activeDot: idx === currentSlide })}
                    onClick={() => setCurrentSlide(idx)}
                  />
                ))}
              </div>
            </div>
            {/* <div className="product__intro__image__list">
              <div className="product__intro__image__list__arrow left" onClick={goToPrevLowerSlide}>
                <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.27279 8.38349L9 2.40834L7.36365 0.701172L-2.43376e-07 8.38349L7.36365 16.0657L9 14.3586L3.27279 8.38349Z"
                    fill="white"
                  />
                </svg>
              </div>
              {slides?.map((slide, idx) => (
                <img
                  src={slide}
                  alt="slide"
                  key={idx}
                  className="product__intro__image__list__item"
                  onClick={() => setCurrentSlide(idx)}
                />
              ))}
              <div className="product__intro__image__list__arrow right" onClick={goToNextLowerSlide}>
                <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.72721 8.38349L0 2.40834L1.63635 0.701172L9 8.38349L1.63635 16.0657L0 14.3586L5.72721 8.38349Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div> */}
            <div className="product__intro__map__container">
              <img src={map} alt="map" className="product__intro__map" />
            </div>
          </div>
          <div className="product__intro__info">
            <div className="product__intro__info__title" dangerouslySetInnerHTML={{ __html: title }}></div>
            <div className="product__intro__info__address">
              <svg
                className="product__intro__info__address__icon"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.6595 19.5345L13.5 26.6939L6.34054 19.5345C2.38648 15.5803 2.38648 9.1696 6.34054 5.21554C10.2946 1.26148 16.7053 1.26148 20.6595 5.21554C24.6135 9.1696 24.6135 15.5803 20.6595 19.5345ZM13.5 14.625C14.7427 14.625 15.75 13.6177 15.75 12.375C15.75 11.1324 14.7427 10.125 13.5 10.125C12.2573 10.125 11.25 11.1324 11.25 12.375C11.25 13.6177 12.2573 14.625 13.5 14.625Z"
                  fill="#006210"
                />
              </svg>
              <p dangerouslySetInnerHTML={{ __html: address }}></p>
            </div>
            <div className="product__intro__info__text" dangerouslySetInnerHTML={{ __html: text }}></div>
            <div className="product__intro__info__button__container">
              <div className="product__intro__info__button button" onClick={scrollToContact}>
                <svg
                  className="button__icon"
                  width="65"
                  height="65"
                  viewBox="0 0 65 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M59.5832 46.0477C59.5805 53.8231 54.1167 60.3217 46.8193 61.9169L45.0914 56.7332C48.3523 56.201 51.1237 54.2131 52.7173 51.4584H46.0415C43.0499 51.4584 40.6248 49.0334 40.6248 46.0418V35.2084C40.6248 32.2168 43.0499 29.7917 46.0415 29.7917H53.9989C52.6661 19.1038 43.5488 10.8334 32.4998 10.8334C21.4509 10.8334 12.3336 19.1038 11.0008 29.7917H18.9582C21.9497 29.7917 24.3748 32.2168 24.3748 35.2084V46.0418C24.3748 49.0334 21.9497 51.4584 18.9582 51.4584H10.8332C7.84163 51.4584 5.4165 49.0334 5.4165 46.0418V32.5001C5.4165 17.5424 17.5421 5.41675 32.4998 5.41675C47.4574 5.41675 59.5832 17.5424 59.5832 32.5001V35.2049V35.2084V46.0418V46.0477Z"
                    fill="black"
                  />
                </svg>
                Зв'язатись з<br /> нами
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
