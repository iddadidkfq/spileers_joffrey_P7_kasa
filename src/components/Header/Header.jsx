// Import du logo depuis le dossier du composant
import logo from './logoKasa.png';

// Import du composant de navigation
import NavigListe from '../Navigation/NavigListe';

// Import du style spécifique au Header
import './Header.scss';

/**
 * Composant Header
 *
 * Responsabilité :
 * - Afficher le bandeau supérieur
 * - Afficher le logo
 * - Afficher le menu de navigation
 *
 * Aucune logique métier ici
 */
function Header() {
  return (
    <header className="header">
      {/* Logo Kasa */}
      <img
        src={logo}
        alt="Logo Kasa"
        className="header__logo"
      />

      {/* Menu de navigation */}
      <NavigListe />
    </header>
  );
}

export default Header;
