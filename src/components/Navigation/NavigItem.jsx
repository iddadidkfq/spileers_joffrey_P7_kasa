import { Link, useLocation } from 'react-router-dom';
import './NavigItem.scss';

/**
 * Composant NavigItem
 *
 * Props :
 * - label : texte affiché
 * - routingPath : chemin de navigation
 *
 * Responsabilité :
 * - Afficher un item de menu
 * - Déterminer s’il est actif ou inactif via l’URL
 */
function NavigItem({ label, routingPath }) {
  const location = useLocation();

  // Le lien est inactif si le path correspond à l'URL courante
  const isInactive = routingPath === location.pathname;

  // Cas lien inactif : texte simple
  if (isInactive) {
    return (
      <span className="navig-item">
        {label}
      </span>
    );
  }

  // Cas lien actif : lien cliquable et souligné
  return (
    <Link
      to={routingPath}
      className="navig-item navig-item--active"
    >
      {label}
    </Link>
  );
}

export default NavigItem;
