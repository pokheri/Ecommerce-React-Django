import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram, FaYoutube } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import "./keepintouch.css";

const KeepInTouch = () => {
  return (
    <div className="keep-in-touch">
      <span>KEPP IN TOUCH </span>
      <div className="icons">
        <ImFacebook2 className="icon-one" />
        <FaTwitter className="icon-one" />
        <FaYoutube className="icon-one" />
        <FaSquareInstagram className="icon-one" />
      </div>
    </div>
  );
};

export default KeepInTouch;
