import React, { useContext } from "react";
import classes from "./AboutFinal.module.css";
import { LanguageContext } from "../../context/LanguageContext";

const AboutFinal = () => {
  const { language } = useContext(LanguageContext);
  let isEnglish = language === "en";
  return (
    <section className={classes.FinalText}>
      <div className={classes.wrapper}>
        <div className={classes.FinalTextContent}>
          <div className={classes.FTText}>
            <div className={classes.FTTitle}>
              {isEnglish ? "And some more facts" : "І ще трішки фактів"}
            </div>
            <div className={classes.FTSubTitle}>
              {isEnglish
                ? "All these aspects were carefully developed to create web applications capable of making three-dimensional reality designers of gift boxes. The proposed site presents it is the embodiment of logical completeness and efficiency functionality."
                : "Усі ці аспекти були ретельно розроблені для створення веб програми, здатні створювати тривимірну реальність дизайнери подарункових коробок. Запропонований сайт презентує це втілення логічної завершеності та ефективності функціональність."}
            </div>
          </div>
          <div className={classes.FTImg}>
            <span className={classes.FTSpan1}>&nbsp;</span>
            <span className={classes.FTSpan2}>&nbsp;</span>
            <span className={classes.FTSpan3}>&nbsp;</span>
            <span className={classes.FTSpan4}>&nbsp;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFinal;
