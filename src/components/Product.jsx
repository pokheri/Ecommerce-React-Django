import "./product.css";

const Product = ({ item }) => {
  return (
    <div className="product-container">
      <div
        className="product-image"
        style={{ backgroundImage: "url('logo.svg')" }}
      ></div>
      <div className="product-info">
        <p className="subtitle">Cleansing Shampoos</p>
        <p className="title">
          UNDER <del>567</del> {item}{" "}
        </p>
      </div>
    </div>
  );
};

export default Product;
