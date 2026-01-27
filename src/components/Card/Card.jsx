import { Link } from 'react-router-dom';
import './Card.scss';

/**
 * Composant Card
 *
 * Props :
 * - logement : objet logement (id, title, cover, etc.)
 *
 * Responsabilité :
 * - Afficher l'image du logement
 * - Afficher le titre en surimpression
 * - Rediriger vers la page Logement au clic
 */
function Card({ logement }) {
  return (
    <Link
      to={"/logement/" + logement.id}  // modif ici pour envoyer logt inexistant
      className="card"
    >
      {/* Image du logement */}
      <img
        src={logement.cover}
        alt={logement.title}
        className="card__image"
      />

      {/* Titre en surimpression */}
      <h2 className="card__title">
        {logement.title}
      </h2>
    </Link>
  );
}

export default Card;
