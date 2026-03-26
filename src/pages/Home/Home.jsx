import Card from '../../components/Card/Card';
import Banner from '../../components/Banner/Banner';
import image from './bandeau.png'
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
function Home({ logements }) {    // 1. props: tous les logements
  return (
    <main className="home">
 
      <Banner        // 2. composant banner et ses PROPS  
        title='Chez vous, partout et ailleurs'
        picture={image}
      />

      {/* 3. Boucle sur les logements */}
      <section className="home__grid">
        {logements.map((logement) => (
          <Card        // 4. Pour chaque objet logement, composant Card et ses PROPS  
            key={logement.id} // 5. key pour unicité
            logement={logement}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
