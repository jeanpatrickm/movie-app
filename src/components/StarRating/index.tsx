import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import "./index.scss";
export interface Props {
  rating: number;
}

export default function StarRating(props: Props) {
  const numStars = Math.round(props.rating / 2);

  const fullStars = [];
  const emptyStars = [];

  for (let i = 0; i < numStars; i++) {
    if (i < numStars) {
      fullStars.push(i);
    } else {
      emptyStars.push(i);
    }
  }

  return (
    <div className="movie-rating">
      {fullStars.map((star) => (
        <FaStar key={star} />
      ))}
      {emptyStars.map((star) => (
        <FaRegStar key={star} />
      ))}
    </div>
  );
}
