import "./textContainer.css";

const TextContainer = ({ children, extraTop = "16px" }) => {
  return (
    <div className="text-container" style={{ marginTop: extraTop }}>
      {children}
    </div>
  );
};

export default TextContainer;
