import HousingInfo from './HousingInfo';
import HostRating from './HostRating';
import './HousingHeader.scss';


function HousingHeader({ title, location, tags, host, rating }) {
  return (
    <section className="housing-header">
      <HousingInfo title={title} location={location} tags={tags} />
      <HostRating host={host} rating={rating} />
    </section>
  );
}

export default HousingHeader;
