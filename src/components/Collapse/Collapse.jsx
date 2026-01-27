import { useState } from 'react';
import './Collapse.scss';

import arrow from './Vector.png';

/**
 * Composant Collapse
 *
 * Props :
 * - title : string → titre affiché dans le bandeau
 * - children : contenu à afficher / masquer
 */
function Collapse({ title, classDesktop, children }) {
  // State local pour gérer l'ouverture / fermeture
  // false = fermé (état initial)
  const [isOpen, setIsOpen] = useState(false);

  // Inverse l'état du collapse
  const toggleCollapse = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="collapse">
      {/* En-tête du collapse */}
      <div className="collapse__header" onClick={toggleCollapse}>
        <h3 className={'collapse__title ' + classDesktop}>
          {title}
        </h3>

        {/* Flèche : bas si fermé, haut si ouvert */}
        <span className={`collapse__arrow ${isOpen ? 'collapse__arrow--open' : ''}`}>
          <img src={arrow} alt='arrow'/>
        </span>
      </div>

      {/* Contenu affiché uniquement si ouvert */}
      {isOpen && (
        <div className={'collapse__content ' + classDesktop}>
          {children}
        </div>
      )}
    </div>
  );
}

export default Collapse;
