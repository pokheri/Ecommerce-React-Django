const NavItem = ({ item }) => {
  return (
    <div className="nav-outer">
      <div className="nav-inner">
        <a className="nav-item-links" href="#">
          {item}
        </a>
      </div>
    </div>
  );
};

export default NavItem;
