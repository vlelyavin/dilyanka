import { useRef, useState } from "react";
import { Container } from "../Container/Container";
import emailjs from "@emailjs/browser";
import "./ContactForm.scss";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [statusText, setStatusText] = useState("");
  const observer = useInView({ threshold: 0.3 });
  const form = useRef();
  const sendMail = async (e) => {
    e.preventDefault();
    const newErrors = {};
    // Validate name
    if (name.trim() === "") {
      newErrors.name = "Ім'я обов'язкове";
      // setErrors((prevErrors) => ({
      //   ...prevErrors,
      //   name: "Ім'я обов'язкове",
      // }));
    }

    // Validate phone
    if (phoneNumber.trim() === "") {
      // setErrors((prevErrors) => ({
      //   ...prevErrors,
      //   phoneNumber: "Введіть номер телефону",
      // }));
      newErrors.phoneNumber = "Введіть номер телефону";
    } else if (!/^\d{10}$/.test(phoneNumber.trim())) {
      // setErrors((prevErrors) => ({
      //   ...prevErrors,
      //   phoneNumber: "Номер телефону повинен бути довжиною в 10 символів та містити лише цифри",
      // }));
      newErrors.phoneNumber = "Невірний формат номера";
    }

    // Validate message
    if (message.trim() === "") {
      // setErrors((prevErrors) => ({
      //   ...prevErrors,
      //   message: "Введіть своє повідомлення",
      // }));
      newErrors.message = "Введіть своє повідомлення";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    // const data = {
    //   name,
    //   phoneNumber,
    //   message,
    // };
    // const response = await axios.post("/send_email", data);
    // console.log(response.data);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStatusText("Ваше повідомлення надіслано!");
          setTimeout(() => {
            setStatusText("");
          }, 2000);
        },
        (error) => {
          setStatusText("Сталася помилка");
          setTimeout(() => {
            setStatusText("");
          }, 2000);
        }
      );
    form.current.reset();
  };
  return (
    <section className="section contact" ref={observer.ref}>
      <Container>
        <div className="contact__upper">
          <div className="contact__upper__info">
            <div className="contact__upper__info__logo logo">Da!</div>
            <div className="contact__upper__info__text">
              Заповніть форму, аби наші менеджери
              <br /> <span>звязались з вами.</span>
            </div>
          </div>
          <div className={classNames("contact__title section__title", { animate: observer.inView })}>
            Залишились
            <br /> питання?
          </div>
        </div>
        <form className="contact__row" ref={form}>
          <div className="contact__row__inputs">
            <div className="contact__row__input__container">
              <div className="contact__row__input__title">Ім'я</div>
              <input
                type="text"
                placeholder="John Smith"
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                  setErrors((prevErrors) => ({
                    ...prevErrors,
                    name: "",
                  }));
                }}
                style={{ boxShadow: errors.name && "0 0 0 3px rgb(255, 59, 59)" }}
                value={name}
                className="contact__row__input"
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="contact__row__input__container">
              <div className="contact__row__input__title">Номер телефону</div>
              <input
                type="tel"
                placeholder="+38 (096) 000 00 00"
                name="phoneNumber"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  setErrors((prevErrors) => ({
                    ...prevErrors,
                    phoneNumber: "",
                  }));
                }}
                style={{ boxShadow: errors.phoneNumber && "0 0 0 3px rgb(255, 59, 59)" }}
                value={phoneNumber}
                className="contact__row__input"
              />
              {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
            </div>
          </div>
          <div className="contact__row__textarea__container">
            <textarea
              className="contact__row__textarea"
              placeholder="Додаткова інформація"
              name="message"
              onChange={(e) => {
                setMessage(e.target.value);
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  message: "",
                }));
              }}
              style={{ boxShadow: errors.message && "0 0 0 3px rgb(255, 59, 59)" }}
              value={message}
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
        </form>
        <div className="contact__button__container" onClick={sendMail}>
          <div className="contact__button">
            <div className="contact__button__status">{statusText}</div>
            Надіслати
          </div>
        </div>
      </Container>
    </section>
  );
};
