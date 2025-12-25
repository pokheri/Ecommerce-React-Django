import TextContainer from "../TextContainer";
import CatProduct from "./CatProduct";
import "./category.css";

const CatContainer = () => {
  return (
    <>
      <TextContainer>
        <p className="container-text">Search By Category</p>
      </TextContainer>
      <div className="categrory-pr-container">
        <CatProduct />
        <CatProduct />
        <CatProduct />
        <CatProduct />
        <CatProduct />
        <CatProduct />
        <CatProduct />
        <CatProduct />
      </div>
    </>
  );
};

export default CatContainer;
