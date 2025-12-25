import styles from "../../css/Header.module.css";
import Action from "./Action";
import Logo from "./Logo";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className={`${styles.myntraHeader}`}>
      <Logo />
      <Navbar />
      <SearchBar />
      <Action />
    </div>
  );
};

export default Header;
