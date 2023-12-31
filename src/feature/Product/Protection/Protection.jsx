import { useInView } from "react-intersection-observer";
import { Container } from "../../../components/Container/Container";
import "./Protection.scss";
import classNames from "classnames";

export const Protection = () => {
  const observer = useInView({ threshold: 0.3 });
  return (
    <section className="section protection" ref={observer.ref}>
      <Container>
        <div className="protection__inner">
          <div className={classNames("section__title protection__title", { animate: observer.inView })}>
            Юридично
            <br />
            захищена купівля
          </div>
          <div className="protection__row">
            <div className="protection__column">
              <div className="protection__column__upper">
                <div className="protection__column__upper__title">Документація</div>

                <svg
                  className="protection__column__upper__icon"
                  width="81"
                  height="81"
                  viewBox="0 0 81 81"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="40.5" cy="40.5" r="38.7" stroke="black" stroke-width="3.6" />
                  <path
                    d="M40.1293 25.7477C42.7467 25.7477 44.8406 26.4544 46.411 27.8678C47.9815 29.2812 48.7667 31.2443 48.7667 33.757C48.7667 36.479 47.916 38.5337 46.2147 39.9209C44.5396 41.282 42.2494 41.9886 39.3441 42.041V46.3597H35.1039V39.0572H36.9884C39.2656 39.0572 41.0585 38.6907 42.3672 37.9579C43.6759 37.1988 44.3302 35.8116 44.3302 33.7962C44.3302 32.4352 43.9376 31.3751 43.1524 30.6161C42.3672 29.8309 41.3071 29.4383 39.9723 29.4383C38.5589 29.4383 37.4203 29.844 36.5566 30.6553C35.6928 31.4667 35.261 32.5268 35.261 33.8355H30.9815C30.9553 32.265 31.3087 30.8778 32.0416 29.6738C32.7744 28.4436 33.8345 27.4883 35.2217 26.8078C36.6089 26.1011 38.2448 25.7477 40.1293 25.7477ZM39.8152 49.8539V54.8008H34.7113V49.8539H39.8152Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="protection__column__text">
                Компанія "Dilyanka" прагне забезпечити своїх клієнтів повним пакетом необхідних документів для швидкого
                продажу земельних ділянок, з максимальною безпекою й зручністю. Ми розуміємо, що правильна юридична
                підтримка є важливою складовою успішної угоди, тому наші юристи з більш ніж 20-річним досвідом ставлять
                у пріоритет захист інтересів наших клієнтів.
                <br />
                <br />
                Ми розуміємо, що процес придбання земельної ділянки може бути складним і заплутаним, тому наша мета -
                зробити його якомога простішим та зрозумілим для вас. Наші юристи завжди готові надати вам всю необхідну
                інформацію та консультації, щоб ви могли прийняти виважені рішення та мати повну впевненість у своїй
                угоді.
                <br />
                <br />
                Обираючи компанію "Dilyanka ", ви отримуєте не тільки найкращі земельні ділянки але й повний спектр
                юридичної підтримки, яка забезпечить вашу безпеку та спокій у процесі угоди.
              </div>
            </div>
            <div className="protection__column">
              <div className="protection__column__upper">
                <div className="protection__column__upper__title">Супровід</div>

                <svg
                  className="protection__column__upper__icon"
                  width="81"
                  height="81"
                  viewBox="0 0 81 81"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="40.5" cy="40.5" r="38.7" stroke="black" stroke-width="3.6" />
                  <path
                    d="M40.1293 25.7477C42.7467 25.7477 44.8406 26.4544 46.411 27.8678C47.9815 29.2812 48.7667 31.2443 48.7667 33.757C48.7667 36.479 47.916 38.5337 46.2147 39.9209C44.5396 41.282 42.2494 41.9886 39.3441 42.041V46.3597H35.1039V39.0572H36.9884C39.2656 39.0572 41.0585 38.6907 42.3672 37.9579C43.6759 37.1988 44.3302 35.8116 44.3302 33.7962C44.3302 32.4352 43.9376 31.3751 43.1524 30.6161C42.3672 29.8309 41.3071 29.4383 39.9723 29.4383C38.5589 29.4383 37.4203 29.844 36.5566 30.6553C35.6928 31.4667 35.261 32.5268 35.261 33.8355H30.9815C30.9553 32.265 31.3087 30.8778 32.0416 29.6738C32.7744 28.4436 33.8345 27.4883 35.2217 26.8078C36.6089 26.1011 38.2448 25.7477 40.1293 25.7477ZM39.8152 49.8539V54.8008H34.7113V49.8539H39.8152Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="protection__column__text">
                Наші спеціалісти вкладають максимум зусиль у перевірку кожної ділянки, виїзджаючи особисто на об'єкт,
                щоб виявити всі можливі недоліки.
                <br />
                <br />
                Ми розуміємо наскільки важливо мати повну інформацію про ділянку перед придбанням.
                <br />
                <br />
                Якщо ви маєте конкретні вимоги щодо призначення ділянки, і вона не повністю відповідає вашим інтересам,
                ми готові допомогти вам з процедурою зміни призначення ділянки. Наші експерти орієнтуються в
                законодавстві та процедурах зміни призначення, тому вони зможуть забезпечити вас правильною та
                ефективною підтримкою.
                <br />
                <br />
                Компанія "Dilyanka" прагне зробити процес придбання земельної ділянки максимально зручним та безпечним
                для вас. Ми робимо все можливе, щоб ви могли зосередитися на своїх потребах та бажаннях, маючи
                впевненість, що ми піклуємося про всі деталі та аспекти угоди.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
