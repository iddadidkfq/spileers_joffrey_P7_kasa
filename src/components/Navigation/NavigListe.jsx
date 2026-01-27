import NavigItem from './NavigItem';
import './NavigListe.scss';

function NavigListe() {
  return (
    <nav className="navig-liste">
      <NavigItem label="Accueil" routingPath="/" />
      <NavigItem label="A propos" routingPath="/about" />
    </nav>
  );
}

export default NavigListe;
