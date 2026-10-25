import React, { useContext, useEffect, useRef, useState } from "react";
import classes from "./Welcome.module.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Casketbox from "../3dModels/Casketbox";
import { LanguageContext } from "../../context/LanguageContext";
import ScrollDown from "../../UI/ScrollDown";

const Welcome = () => {
  const [titleBlockWidth, setTitleBlockWidth] = useState();
  const [leftSpanWidth, setLeftSpanWidth] = useState();
  const [centralSpanWidth, setCentralSpanWidth] = useState();

  const lineHeight = 78;

  let classLeft = {
    transform: `translate3d(${
      -(titleBlockWidth / 2) + leftSpanWidth + centralSpanWidth / 2
    }px,${-lineHeight}px, 0)`,
  };
  let classCentral = {
    transform: `translateX(${-(titleBlockWidth / 2) + centralSpanWidth / 2}px`,
  };
  let classRight = {
    transform: `translate3d(${
      -(titleBlockWidth / 2) - centralSpanWidth / 2
    }px,${lineHeight}px, 0)`,
  };

  useEffect(() => {
    let welcomeTitle = document.getElementById("welcomeTitle");
    let ModelTop = document.getElementById("ModelTop");
    welcomeTitle.classList.add(classes.textAnimationIncrease);
    let timeout2;
    let timeout3;
    const timeout1 = setTimeout(
      () => {
        if (window.innerWidth > 1024) {
          setTitleBlockWidth(
            document.getElementById("welcomeTitle").offsetWidth
          );
          setLeftSpanWidth(document.getElementById("leftSpan").offsetWidth);
          setCentralSpanWidth(
            document.getElementById("centralSpan").offsetWidth
          );
        }
        timeout2 = setTimeout(() => {
          ModelTop.style.opacity = "1";
          orbitControlsRef.current.autoRotateSpeed = 200;
          timeout3 = setTimeout(() => {
            orbitControlsRef.current.autoRotateSpeed = 5;
          }, 500);
        }, 500);
      },
      window.innerWidth > 1024 ? 4000 : 0
    );

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  const orbitControlsRef = useRef(null);
  const { language } = useContext(LanguageContext);
  let isEnglish = language === "en";

  return (
    <section className={classes.WelcomeSection} id="welcomeSection">
      <ScrollDown />
      <div className={classes.wrapper}>
        <div className={classes.WelcomeContent}>
          <div className={classes.title} id="welcomeTitle">
            <span id="leftSpan" style={classLeft}>
              {isEnglish ? "Design your" : "Створи свій"}&nbsp;
            </span>
            <span
              id="centralSpan"
              style={classCentral}
              className={classes.redSpan}
            >
              {isEnglish ? "gift box" : "гіфт бокс"}&nbsp;
            </span>
            <span id="rightSpan" style={classRight}>
              {isEnglish ? "right now!" : "прямо зараз!"}
            </span>
          </div>

          <div className={classes.ModelTop} id="ModelTop">
            &nbsp;
            <Canvas className={classes.CanvasTop}>
              <OrbitControls
                target={[0, 0, 0]}
                ref={orbitControlsRef}
                autoRotate={true}
                autoRotateSpeed={10}
                enableRotate={false}
                enableZoom={false}
              />
              <PerspectiveCamera
                makeDefault
                position={[3, 3, 10]}
                fov={window.innerWidth > 576 ? 40 : 55}
              />
              <directionalLight position={[-2, 5, 2]} intensity={0.9} />
              <ambientLight intensity={0.6} />
              <Casketbox />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;