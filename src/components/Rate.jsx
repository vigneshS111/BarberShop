import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { IoMdStar } from "react-icons/io";

const Rate = ({ count, rating, color, onRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const getColor = (index) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (!hoverRating && rating >= index) {
      return color.filled;
    }

    return color.unfilled;
  };

  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <IoMdStar
          key={idx}
          className="cursor-pointer w-[25px] h-[25px]"
          onClick={() => onRating(idx)}
          style={{ color: getColor(idx) }}
          onMouseEnter={() => setHoverRating(idx)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ));
  }, [count, rating, hoverRating]);

  return <div className="flex flex-row">{starRating}</div>;
};

Rate.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
  onRating: PropTypes.func,
  color: PropTypes.shape({
    filled: PropTypes.string,
    unfilled: PropTypes.string,
  }),
};

Rate.defaultProps = {
  count: 5,
  rating: 5,
  color: {
    filled: "#f5eb3b",
    unfilled: "#DCDCDC",
  },
};

export default Rate;
