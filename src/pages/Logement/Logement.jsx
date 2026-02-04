import { useParams, Navigate } from 'react-router-dom';
import HousingDetails from '../../components/HousingDetails/HousingDetails';
import Carousel from '../../components/Carousel/Carousel';
import HousingHeader from '../../components/HousingHeader/HousingHeader';
import './Logement.scss';


/**
 * Composant Logement
 *
 * Props :
 * - logements : tableau des logements
 *
 * Responsabilité :
 * - Récupérer l'id depuis l'URL
 * - Chercher le logement correspondant dans le tableau
 * - Afficher HousingDetails si trouvé, sinon rediriger vers NotFound
 */
function Logement({ logements }) {
  // 1. récupération de l'id dans les paramètres de l'URL
  const { id } = useParams();   

  // 2. Recherche du logement correspondant dans la PROPS
  const logement = logements.find((l) => l.id === id);

  // 3a. Si pas trouvé, redirige vers NotFound
  if (!logement) {
    return <Navigate to="/NotFound" />;
  }
  // 3b. affichage du logement
  return (
    <main className="logement-page">
      <Carousel pictures={logement.pictures} />
      <HousingHeader
        title={logement.title}
        location={logement.location}
        tags={logement.tags}
        host={logement.host}
        rating={logement.rating}
      />
      <HousingDetails
        description={logement.description}
        equipements={logement.equipments} 
      />
    </main>
  );
}

export default Logement;
