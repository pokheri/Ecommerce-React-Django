// this contain six item in row
import { useEffect, useState } from "react";
import "./itemContainer.css";
import Product from "./Product";
import TextContainer from "./TextContainer";

const ItemContainer = () => {
  let [currentIndex, setCurrentIndex] = useState(0);
  let [sliderTime, setSliderTime] = useState(5000);
  let [isTransition, setTransition] = useState(true);
  function handleClick(value) {
    setCurrentIndex(value);
    setSliderTime(10000);
  }
  const numbers = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === 2) {
          // last page → jump to first
          setTransition(false);
          return 0;
        }
        setTransition(true);
        return prev + 1;
      });
    }, sliderTime);

    return () => clearInterval(interval);
  }, [sliderTime]);

  return (
    <>
      <TextContainer extraTop="89px">
        <p className="container-text">Home and Groceries</p>
      </TextContainer>

      <div className="item-row-container">
        <div className="items-window">
          <div
            className="imagetrack"
            style={{
              transform: `translateX(-${currentIndex * (6 * 232)}px)`,

              transition: isTransition ? "transform 0.5s ease" : null,
            }}
          >
            {numbers.map((item) => (
              <Product key={item} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="button-action">
        <span
          className="circle-btn"
          style={currentIndex === 0 ? { backgroundColor: "black" } : null}
          onClick={() => {
            handleClick(0);
          }}
        ></span>
        <span
          className="circle-btn"
          style={currentIndex === 1 ? { backgroundColor: "black" } : null}
          onClick={() => {
            handleClick(1);
          }}
        ></span>
        <span
          className="circle-btn"
          style={currentIndex === 2 ? { backgroundColor: "black" } : null}
          onClick={() => {
            handleClick(2);
          }}
        ></span>
      </div>
    </>
  );
};

export default ItemContainer;
