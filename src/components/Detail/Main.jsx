import { GiSpottedArrowhead } from "react-icons/gi";
import FilterArea from "./FilterArea";
import "./main.css";
import Product from "./Product";
const Main = () => {
  let items = [
    12, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 3, 4, 5, 6, 6, 7, 4,
    4, 5, 6, 6, 6, 7, 7,
  ];
  return (
    <div className="cat-page-container">
      <div className="main-content-upper">
        <p>FILTERS</p>
        <div className="div-nav">
          <span>Ankel Height</span>
          <span>Bundles</span>
          <span>Country of Origin</span>
          <span>Fastening</span>
          <span>Insole</span>
          <span>Materials</span>
          <span>Micro Trends</span>
          <span>
            <b>+12 more</b>
          </span>
        </div>
        <div className="filter-div">
          <span>
            Sort By: <b>Recomended</b>
          </span>
          <GiSpottedArrowhead id="down-icon" />
        </div>
      </div>
      <hr
        style={{
          margin: "17px 0px 0px 0px ",
        }}
      />
      <div className="div-main-content">
        <FilterArea />
        <div className="product-area">
          {items.map((item) => (
            <Product />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
