import { FaGooglePlay } from "react-icons/fa";
import { RiAppleLine } from "react-icons/ri";
import "./iconbutton.css";
const IconButton = () => {
  return (
    <>
      <div className="icon-container">
        <div className="icon-store">
          <RiAppleLine className="icon-i" />
          <div className="text">
            Get it on
            <p style={{ fontSize: "18px" }}>Apple Store</p>
          </div>
        </div>
        <div className="icon-store">
          <FaGooglePlay className="icon-i" />
          <div className="text">
            Get it on
            <p>Play Store</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IconButton;
