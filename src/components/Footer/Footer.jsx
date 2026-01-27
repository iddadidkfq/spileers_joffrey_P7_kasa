import './Footer.scss';
import logo from "./LogoFooter.png"

function Footer() {
  return (
    <footer className="footer">
      <img
        src={logo}
        alt="Logo Kasa"
        className="footer__logo"
      />
      <p>© 2026 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
