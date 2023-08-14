import "./App.scss";
import { useState } from "react";
import Profile from "../Profile/Profile";
import Theme from "../Theme/Theme";
import ButtonBlocks from "../ButtonBlocks/ButtonBlocks";
import Layout from "../Layout/Layout";
import Footer from "../Footer/Footer";
import PopupLayout from "../PopupLayout/PopupLayout";
import PopupAbout from "../PopupAbout/PopupAbout";
import "../../fonts/fonts.css";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [isTheme, setIsTheme] = useState(true);
  const [isOpenAboutMe, setIsOpenAboutMe] = useState(false);

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

  return (
    <div className={`page ${isTheme ? "" : "page__dark"}`}>
      <Theme handleChangeTheme={handleChangeTheme} isTheme={isTheme}></Theme>
      <Profile isTheme={isTheme}></Profile>
      <ButtonBlocks
        handleShowTrue={handleShowTrue}
        handleShowFalse={handleShowFalse}
        isShow={isShow}
        isTheme={isTheme}
        handleShowAboutMe={handleShowAboutMe}
      ></ButtonBlocks>
      <Layout isShow={isShow} isTheme={isTheme}></Layout>
      <Footer isTheme={isTheme}></Footer>
      <PopupLayout></PopupLayout>
      <PopupAbout
        isOpenAboutMe={isOpenAboutMe}
        handleCloseAboutMe={handleCloseAboutMe}
      ></PopupAbout>
    </div>
  );
}

export default App;
