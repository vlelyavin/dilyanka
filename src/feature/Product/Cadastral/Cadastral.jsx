import { useInView } from "react-intersection-observer";
import { Container } from "../../../components/Container/Container";
import "./Cadastral.scss";
import classNames from "classnames";

export const Cadastral = ({ properties }) => {
  const scrollToContact = () => {
    const form = document.querySelector(".contact");
    form.scrollIntoView({ behavior: "smooth" });
  };
  const observer = useInView({ threshold: 0.3 });
  return (
    <section className="cadastral" ref={observer.ref}>
      <Container>
        <div className="cadastral__inner">
          <div className={classNames("cadastral__title section__title", { animate: observer.inView })}>
            Кадастровий номер
          </div>
          <div className="cadastral__image__container">
            <img src={properties?.cadastralImage} alt="cadastral" className="cadastral__image" />
          </div>
          <div className="cadastral__info">
            <div className="cadastral__info__item">
              <div className="cadastral__info__item__title">Площа</div>
              <div className="cadastral__info__item__text">{properties?.area}</div>
            </div>

            <div className="cadastral__info__item">
              <div className="cadastral__info__item__title">Власність</div>
              <div className="cadastral__info__item__text">{properties?.propertyType}</div>
            </div>

            <div className="cadastral__info__item">
              <div className="cadastral__info__item__title">Призначення</div>
              <div className="cadastral__info__item__text">{properties?.purpose}</div>
            </div>

            <div
              className="cadastral__info__item"
              onClick={() => navigator.clipboard.writeText(properties?.cadastralNumber)}
            >
              <div className="cadastral__info__item__title">Номер кадастру</div>
              <div className="cadastral__info__item__text" title="Copy">
                {properties?.cadastralNumber}
              </div>
            </div>

            <div className="cadastral__info__item">
              <div className="cadastral__info__item__title">Категорія землі</div>
              <div className="cadastral__info__item__text">{properties?.category}</div>
            </div>

            <div className="cadastral__info__item">
              <div className="cadastral__info__button button" onClick={scrollToContact}>
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
                    fill="white"
                  />
                </svg>
                Зв'язатися з<br /> нами
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
