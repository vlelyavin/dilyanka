import { Container } from "../../../components/Container/Container";
import aboutBg from "../../../assets/images/home/aboutBg.png";
import "./About.scss";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

export const About = () => {
  const observer = useInView({ threshold: 0.3 });
  const scrollToContact = () => {
    const form = document.querySelector(".contact");
    form.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section about" ref={observer.ref}>
      <Container>
        <div className="section__main">
          <div className="section__main__image__container about__image__container">
            <img src={aboutBg} alt="about" className="section__main__image about__image" />
          </div>
          <div className={classNames("section__title about__title", { animate: observer.inView })} id="about">
            <span style={{ fontWeight: 600 }}>Dilyanka.</span>
            <br />
            <span style={{ fontStyle: "italic" }}>Хто ми?</span>
          </div>
        </div>
        <div className="about__info">
          <div className="about__info__column">
            <p className={classNames("about__info__text", { animate: observer.inView })}>
              "Dilyanka" - це ваші ворота
              <br /> до інвестиційних можливостей у <br />
              Карпатах.
            </p>
            <div className="about__info__button button" onClick={scrollToContact}>
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
              Зв'язатись з<br />
              нами
            </div>
          </div>
          <div className={classNames("about__info__column", { animate: observer.inView })}>
            Оскільки туристична індустрія в Карпатах процвітає, ми розуміємо величезний потенціал інвестування в
            будівництво. <br />
            <br />
            Незалежно від того, що саме Ви хочете побудувати: розкішний готель, захоплюючий курортний комплекс,
            підприємство з екотуризму або чарівний агротуристичний проект, ми зможемо надати вибір на Вашу потребу.
          </div>
          <div className="about__info__logo logo">Da!</div>
        </div>
      </Container>
    </section>
  );
};
