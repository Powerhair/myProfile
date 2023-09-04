import "./App.scss";
import { useState, useEffect } from "react";
import Profile from "../Profile/Profile";
import Theme from "../Theme/Theme";
import ButtonBlocks from "../ButtonBlocks/ButtonBlocks";
import Layout from "../Layout/Layout";
import Footer from "../Footer/Footer";
import PopupLayout from "../PopupLayout/PopupLayout";
import PopupAbout from "../PopupAbout/PopupAbout";
import "../../fonts/fonts.css";
import capy from "../../images/capy.svg";

function App() {
  const [isShow, setIsShow] = useState(true);
  const [isTheme, setIsTheme] = useState(true);
  const [isOpenAboutMe, setIsOpenAboutMe] = useState(false);
  const [isLanguage, setIsLanguage] = useState(true);

  useEffect(() => {
    document.title = "My Profile";

    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = capy;
  }, []);

  function handleChangeTheme() {
    if (isTheme === true) {
      setIsTheme(false);
    } else if (isTheme === false) {
      setIsTheme(true);
    }
  }

  function handleShowTrue() {
    setIsShow(true);
  }

  function handleShowFalse() {
    setIsShow(false);
  }

  function handleShowAboutMe() {
    setIsOpenAboutMe(true);
  }

  function handleCloseAboutMe() {
    setIsOpenAboutMe(false);
  }

  function handleChangeLanguageEn() {
    setIsLanguage(true);
  }
  function handleChangeLanguageRu() {
    setIsLanguage(false);
  }

  console.log(isLanguage);

  return (
    <div className={`page ${isTheme ? "" : "page__dark"}`}>
      <Theme
        handleChangeTheme={handleChangeTheme}
        isTheme={isTheme}
        handleChangeLanguageEn={handleChangeLanguageEn}
        handleChangeLanguageRu={handleChangeLanguageRu}
      ></Theme>
      <Profile isTheme={isTheme} isLanguage={isLanguage}></Profile>
      <ButtonBlocks
        handleShowTrue={handleShowTrue}
        handleShowFalse={handleShowFalse}
        isShow={isShow}
        isTheme={isTheme}
        handleShowAboutMe={handleShowAboutMe}
        isLanguage={isLanguage}
      ></ButtonBlocks>
      <Layout
        isShow={isShow}
        isTheme={isTheme}
        isLanguage={isLanguage}
      ></Layout>
      <Footer isTheme={isTheme} isLanguage={isLanguage}></Footer>
      <PopupLayout
        isLanguage={isLanguage}
        handleChangeLanguageEn={handleChangeLanguageEn}
        handleChangeLanguageRu={handleChangeLanguageRu}
      ></PopupLayout>
      <PopupAbout
        key={isOpenAboutMe}
        isOpenAboutMe={isOpenAboutMe}
        handleCloseAboutMe={handleCloseAboutMe}
        handleShowAboutMe={handleShowAboutMe}
        isLanguage={isLanguage}
        handleChangeLanguageEn={handleChangeLanguageEn}
        handleChangeLanguageRu={handleChangeLanguageRu}
      ></PopupAbout>
    </div>
  );
}

export default App;
