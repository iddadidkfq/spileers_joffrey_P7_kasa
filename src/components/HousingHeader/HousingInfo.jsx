import Tag from './Tag';
import './HousingInfo.scss';

function HousingInfo({ title, location, tags = []  }) {
  return (
    <div className="housing-info">
      <h1 className="housing-info__title">{title}</h1>
      <p className="housing-info__location">{location}</p>
      <div className="housing-info__tags">
        {tags.map((tag, index) => (
          <Tag key={index} label={tag} />
        ))}
      </div>
    </div>
  );
}

export default HousingInfo;
