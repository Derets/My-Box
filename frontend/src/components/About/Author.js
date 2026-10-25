import React, { useContext } from "react";
import classes from "./Author.module.css";
import avatar from "../../assets/About/avatarka.jpeg";
import instagram from "../../assets/About/instagram.svg";
import github from "../../assets/About/github.svg";
import linkedin from "../../assets/About/linkedin.svg";
import { LanguageContext } from "../../context/LanguageContext";

const Author = () => {
  const { language } = useContext(LanguageContext);
  let isEnglish = language === "en";
  return (
    <section className={classes.AuthorSection}>
      <div className={classes.wrapper}>
        <div className={classes.AuthorContent}>
          <div className={classes.AuthorInfo}>
            <div className={classes.AuthorImg}>
              <img src={avatar} alt="" />
            </div>
            <div className={classes.AuthorLinks}>
              <a
                href="https://www.instagram.com/andreyderets/?hl=ru"
                target="_blank"
              >
                <img src={instagram} alt="" />
              </a>
              <a href="https://github.com/Derets" target="_blank">
                <img src={github} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/andrey-derets/"
                target="_blank"
              >
                <img src={linkedin} alt="" />
              </a>
            </div>
          </div>
          <div className={classes.AuthorText}>
            <p>Andrey Derets</p>
            {isEnglish
              ? '"I am proud to present this web resource developed by me to demonstrate my high skills and extensive knowledge in this field. During this creative process, I put my energy and effort into creating an intuitive user interface, advanced front-end logic, and a powerful backend API and long-running database."'
              : '"Я з гордістю представляю цей веб-ресурс, розроблений мною для демонстрації моїх високих навичок і великих знань у цій галузі. Під час цього творчого процесу я вклав свою енергію та зусилля у створення інтуїтивно зрозумілого інтерфейсу користувача, вдосконаленої інтерфейсної логіки та потужного серверного API та тривалої бази даних."'}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
