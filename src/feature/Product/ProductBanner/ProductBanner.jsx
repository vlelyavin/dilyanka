import { Link } from "react-router-dom";
import { Container } from "../../../components/Container/Container";
import { useRef, useState } from "react";
import "./ProductBanner.scss";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

export const ProductBanner = ({ image, video }) => {
  const videoRef = useRef();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const observer = useInView({ threshold: 0.3 });
  const handleFullscreenChange = () => {
    const videoElement = videoRef.current;
    if (document.fullscreenElement) {
      setIsFullscreen(false);
      videoElement.pause();
      videoElement.currentTime = 0;
      videoElement.load();
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      setIsFullscreen(true);
      videoElement.play();
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.mozRequestFullScreen) {
        videoElement.mozRequestFullScreen();
      } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) {
        videoElement.msRequestFullscreen();
      }
    }
  };

  return (
    <section className="product__banner" ref={observer.ref}>
      <video
        src={video}
        ref={videoRef}
        className="product__banner__video"
        onClick={handleFullscreenChange}
        muted
        style={{ display: isFullscreen ? "flex" : "none" }}
      />

      <Container>
        <div className="product__banner__inner">
          <div className="product__banner__left">
            <div className="product__banner__subtitle">Земельна Dilyanka</div>
            <div className={classNames("product__banner__title section__title", { animate: observer.inView })}>
              в Карпатах
            </div>
            <Link to="/" className="product__banner__button">
              Повернутись <br />
              на головну
            </Link>
          </div>
          <div className="product__banner__image__wrapper">
            <div className="product__banner__image__container">
              <img src={image} alt="image" className="product__banner__image" />
            </div>
            <div className="product__banner__play__button__container" onClick={handleFullscreenChange}>
              <div className="product__banner__play__button">
                <svg width="30" height="41" viewBox="0 0 30 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M29.4226 21.1454L2.01052 39.8643C1.41627 40.2702 0.613358 40.1057 0.217178 39.4969C0.075574 39.2794 0 39.0237 0 38.7622V1.32461C0 0.593056 0.578985 0 1.29319 0C1.54849 0 1.7981 0.0774107 2.01052 0.222482L29.4226 18.9412C30.0166 19.3471 30.1773 20.1694 29.781 20.7782C29.6864 20.9237 29.5646 21.0484 29.4226 21.1454Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="product__banner__play__button__text">Показати відео</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
