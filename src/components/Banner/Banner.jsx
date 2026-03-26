import './Banner.scss';

function Banner({ title='', picture, classHeightDesktop=''}) {
// classHeightDesktop: si en desktop la hauteur est différente de mobile
  return (
    <div className="banner-main">
    {/* Conteneur pour le bandeau avec texte en superposition */}
        <img className={'banner ' + classHeightDesktop} src={picture} alt="banner" />
      
        <div className="banner-title">{title}</div>
    </div>
  );
}

export default Banner;