import Card from '../../components/Card/Card';
import bandeau from './bandeau.png';
import './Home.scss';

/**
 * Page Home
 *
 * Props :
 * - logements : tableau des logements
 *
 * Responsabilité :
 * - Afficher la liste des logements
 * - Déléguer l'affichage individuel à Card
 */
function Home({ logements }) {
  return (
    <main className="home">
      {/* Conteneur pour le bandeau avec texte en superposition */}
      <div className="home__bandeau-container">
        <img className="home__bandeau" src={bandeau} alt="bandeau" />
        <div className="home__bandeau-text">Chez vous, partout et ailleurs</div>
      </div>

      {/* Boucle sur les logements */}
      <section className="home__grid">
        {logements.map((logement) => (
          <Card        // composant Card et ses PROPS  
            key={logement.id} 
            logement={logement}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
