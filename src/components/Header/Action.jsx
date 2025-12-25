import { FaRegHeart } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { RxPerson } from "react-icons/rx";
const Action = () => {
  return (
    <div className="action">
      <a className="anchor" href="#">
        <div className="action-item">
          <RxPerson className="action-icon" />
          <div className="icon-info">Profile</div>
        </div>
      </a>
      <a className="anchor" href="#">
        <div className="action-item">
          <FaRegHeart className="action-icon" />
          <div className="icon-info">Wishlist</div>
        </div>
      </a>
      <a className="anchor" href="#">
        <div className="action-item">
          <IoBagHandleOutline className="action-icon" />
          <div className="icon-info">Bag</div>
        </div>
      </a>
    </div>
  );
};

export default Action;
