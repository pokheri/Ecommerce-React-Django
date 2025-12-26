const Radio = ({ value }) => {
  return (
    <span id="radio-span">
      <input type="radio" />
      <span className="radio-text">{value}</span>
    </span>
  );
};

export default Radio;
