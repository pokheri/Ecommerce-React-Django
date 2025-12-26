import { Brand } from "./Brand";
import Price from "./Price";
import Radio from "./Radio";

const FilterArea = () => {
  let radioFilter = ["Men", "Women", "Boys", "Girls"];
  return (
    <div className="filter-area">
      <div className="check-point">
        {radioFilter.map((item) => (
          <Radio key={item} value={item} />
        ))}
      </div>
      <Brand />
      <Price />
    </div>
  );
};

export default FilterArea;
