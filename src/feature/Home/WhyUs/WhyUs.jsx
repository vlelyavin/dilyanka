import { Link } from "react-router-dom";
import whyUsImg from "../../../assets/images/home/whyUsBg.png";
import "./WhyUs.scss";
import { Container } from "../../../components/Container/Container";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

export const WhyUs = () => {
  const observer = useInView({ threshold: 0.3 });
  const scrollToContact = () => {
    const form = document.querySelector(".contact");
    form.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="section whyUs" ref={observer.ref}>
      <Container>
        <div className="whyUs__upper">
          <h2 className={classNames("whyUs__title section__title", { animate: observer.inView })} id="whyUs">
            Чому
            <br />
            <span style={{ fontWeight: 600, fontStyle: "italic" }}>Dilyanka?</span>
          </h2>
          <Link to="/catalog" className="catalog__link">
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M31.5 7.875V13.125H7.875V7.875H31.5ZM42 49.875V55.125H7.875V49.875H42ZM57.75 28.875V34.125H7.875V28.875H57.75Z"
                fill="#588847"
              />
            </svg>
            <p className="catalog__link__title">
              Перейти до
              <br /> каталогу
            </p>
          </Link>
        </div>
        <div className="section__main">
          <div className={classNames("section__main__text", { animate: observer.inView })}>
            Ми робимо процес придбання земельної ділянки під забудову простим і зручним.
            <br /> <br />
            Наша команда експертів особисто обирає та перевіряє кожну ділянку, забезпечуючи максимальну прозорість та
            простоту для наших клієнтів.
            <br /> <br />З нами Ви можете впевнено інвестувати в земельні ділянки, за допомогою яких Ви гарантовано
            зробите свій капітал більшим.
          </div>
          <div className="section__main__image__container whyUs__image__container">
            <img src={whyUsImg} alt="whyUs" className="section__main__image whyUs__image" />
          </div>
        </div>
        <div className="whyUs__button__container">
          <div className="whyUs__button button" onClick={scrollToContact}>
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
                fill="black"
              />
            </svg>
            Зв'язатись з<br /> нами
          </div>
        </div>
      </Container>
    </section>
  );
};
