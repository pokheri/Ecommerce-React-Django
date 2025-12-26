import { CiSearch } from "react-icons/ci";
import { BrandComponent } from "./BrandComponent";
export const Brand = () => {
  let brandList = [
    "Roadster",
    "FAUSTO",
    "Puma",
    "Skechers",
    "U.S. Polo Assn.",
    "Killer",
    "Mast & Harbour",
  ];
  return (
    <div className="check-point">
      <div className="brand-head">
        <p>
          <b>BRAND</b>
        </p>
        <CiSearch id="search-icon" />
      </div>
      {brandList.map((item) => (
        <BrandComponent value={item} key={item} />
      ))}
      <div
        className="more-count"
        style={{ color: "#e5328e", fontWidth: "bold" }}
      >
        + 888 more
      </div>
    </div>
  );
};
