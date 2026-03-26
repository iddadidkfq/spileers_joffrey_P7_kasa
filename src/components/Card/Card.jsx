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
function Card({ logement }) {   // 1. Un seul logement en props
  return (
    <Link   // 4. Dans un link pour le routage React...
      to={"/logement/" + logement.id} // 5. vers page logement avec id comme param url
      className="card"
    >
      {/* 2. Image du logement */}
      <img
        src={logement.cover}
        alt={logement.title}
        className="card__image"
      />

      {/* 3. Titre en surimpression */}
      <h2 className="card__title">
        {logement.title}
      </h2>
    </Link>
  );
}

export default Card;
