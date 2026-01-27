import './Rating.scss';
import star from './star.png';

function Rating({ rating }) {
  const stars = Array(5)
    .fill(0)
    .map((_, i) => (
      <img
        key={i}
        src={star}
        alt={i < rating ? 'full star' : 'empty star'}
        className={i < rating ? 'rating__star rating__star--filled' : 'rating__star'}
      />
    ));

  return <div className="rating">{stars}</div>;
}

export default Rating;
