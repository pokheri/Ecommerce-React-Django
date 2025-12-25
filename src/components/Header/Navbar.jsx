import "../../css/navbar.css";
import NavItem from "./NavItem";

const Navbar = () => {
  const navLinks = ["MEN", "WOMEN", "KIDS", "HOME", "BEAUTY", "GENZ", "STUDIO"];

  return (
    <div className="nav-bar">
      {navLinks.map((item) => (
        <NavItem key={item} item={item} />
      ))}
    </div>
  );
};

export default Navbar;
