import React, { useContext, useEffect, useRef, useState } from "react";
import classes from "./Welcome.module.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Casketbox from "../3dModels/Casketbox";
import { LanguageContext } from "../../context/LanguageContext";
import ScrollDown from "../../UI/ScrollDown";

const Welcome = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const orbitControlsRef = useRef(null);
  const { language } = useContext(LanguageContext);
  const isEnglish = language === "en";

  useEffect(() => {
    // Через 1.5 секунды после начального появления перестраиваем слова в колонку слева
    const t1 = setTimeout(() => {
      setIsMoved(true);
    }, 1500);

    // Через 2 секунды плавно проявляем 3D-модель
    const t2 = setTimeout(() => {
      setShowModel(true);
      if (orbitControlsRef.current) {
        orbitControlsRef.current.autoRotateSpeed = 40;
        setTimeout(() => {
          if (orbitControlsRef.current) {
            orbitControlsRef.current.autoRotateSpeed = 4;
          }
        }, 600);
      }
    }, 2200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section className={classes.WelcomeSection} id="welcomeSection">
      <ScrollDown />
      <div className={classes.wrapper}>
        <div className={classes.WelcomeContent}>
          <div
            className={`${classes.title} ${isMoved ? classes.titleMoved : ""}`}
            id="welcomeTitle"
          >
            <span className={classes.leftSpan}>
              {isEnglish ? "Design your" : "Створи свій"}
            </span>
            <span className={classes.centralSpan}>
              {isEnglish ? "gift box" : "гіфт бокс"}
            </span>
            <span className={classes.rightSpan}>
              {isEnglish ? "right now!" : "прямо зараз!"}
            </span>
          </div>

          <div
            className={`${classes.ModelTop} ${
              showModel ? classes.modelVisible : ""
            }`}
            id="ModelTop"
          >
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