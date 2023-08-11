import "./Footer.scss";

function Footer({ isTheme }) {
  return (
    <div className={`footer ${isTheme ? "" : "footer-dark"}`}>
      <h3 className="footer__title">Павел Бондаревский 2023</h3>
    </div>
  );
}

export default Footer;
