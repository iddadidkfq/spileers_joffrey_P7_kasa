import Host from './Host';
import Rating from './Rating';
import './HostRating.scss';

function HostRating({ host = [], rating }) {
  return (
    <div className="host-rating">
      <Host name={host.name} picture={host.picture} />     
      <Rating rating={rating} />
    </div>
  );
}

export default HostRating;
