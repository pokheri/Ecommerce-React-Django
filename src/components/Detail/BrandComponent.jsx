export const BrandComponent = ({ value }) => {
  return (
    <div className="check-box">
      <input className="radio-span" type="checkbox" />
      <span className="radio-text">{value}</span>
    </div>
  );
};
