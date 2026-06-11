import "./Footer.css";
import InstagramIcon from "../../assets/icon-instagram.svg";
import TiktokIcon from "../../assets/icon-tiktok.svg";
import BlueskyIcon from "../../assets/icon-bluesky.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="socials-container">
        <img src={InstagramIcon} alt="Instagram" className="social-icon" />
        <img src={BlueskyIcon} alt="Bluesky" className="social-icon" />
        <img src={TiktokIcon} alt="TikTok" className="social-icon" />
      </div>
      <div className="signature-container">
        <p className="signature-text">Made with ❤️ and 🥑</p>
      </div>
    </div>
  );
};

export default Footer;
