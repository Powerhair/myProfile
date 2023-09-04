import "./Footer.scss";

function Footer({ isTheme, isLanguage }) {
  return (
    <div className={`footer ${isTheme ? "" : "footer-dark"}`}>
      <h3 className="footer__title">
        {isLanguage ? "Павел Бондаревский 2023" : "Pavel Bondarevskii 2023"}
      </h3>
    </div>
  );
}

export default Footer;
