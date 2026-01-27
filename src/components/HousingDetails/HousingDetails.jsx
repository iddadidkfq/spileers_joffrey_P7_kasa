import Collapse from '../Collapse/Collapse';
import './HousingDetails.scss';

/**
 * Composant HousingDetails
 *
 * Props :
 * - description : texte descriptif du logement
 * - equipements : tableau de strings représentant les équipements
 *
 * Responsabilité :
 * - Afficher les informations détaillées du logement
 * - Utilise deux Collapse : Description et Equipements
 */
function HousingDetails({ description, equipements }) {
  return (
    <section className="housing-details">
      {/* Collapse Description */}
      <Collapse title="Description" classDesktop= "desktop-18">
        <p>{description}</p>
      </Collapse>

      {/* Collapse Equipements */}
      <Collapse title="Equipements" classDesktop= "desktop-18">
        <ul>
          {equipements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Collapse>
    </section>
  );
}

export default HousingDetails;
