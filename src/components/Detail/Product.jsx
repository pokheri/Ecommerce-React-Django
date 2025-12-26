import "./product.css";

const Product = () => {
  return (
    <div className="dt-product">
      <div className="dt-p-img-container">
        <span className="rating">4.1 ⭐ | 28 </span>
        <img className="pr-img" src="/images/shoes.jpeg" alt="" />
      </div>
      <div className="product-info">
        <p className="p-name">ASIAN</p>
        <p className="sub-info">Men Lace-Up Sneaker</p>
        <p className="price">
          <span>
            <b>Rs.765</b>
          </span>
          <span>
            <del> Rs.1400</del>
          </span>
          <span className="off-per"> (55% OFF)</span>
        </p>
      </div>
    </div>
  );
};

export default Product;
