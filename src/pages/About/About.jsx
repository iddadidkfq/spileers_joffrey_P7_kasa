import Collapse from '../../components/Collapse/Collapse';
import Banner from '../../components/Banner/Banner';
import image from './bandeau_about.png'
import './About.scss';



/**
 * Page About
 *
 * Responsabilité :
 * - Présenter les valeurs / informations de Kasa
 * - Utiliser le composant Collapse pour afficher le contenu
 */
function About() {
  return (
    <main className="about">

      <Banner        // 1. composant banner et ses PROPS  
        picture={image}
        classHeightDesktop='height223'
      />    

      {/* 2. Conteneur principal des collapses */}
      <section className="about__collapses">
        <Collapse title="Fiabilité" classDesktop="desktop-24">   {/* 3. les collapses avec leurs props */}
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. 
            Les photos sont conformes aux logements, et toutes 
            les informations sont régulièrement vérifiées  par nos équipes.
          </p>
        </Collapse>

        <Collapse title="Respect" classDesktop="desktop-24">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa.
            Tout comportement discriminatoire ou de perturbation 
            du voisinage entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>

        <Collapse title="Service" classDesktop="desktop-24">
          <p>
            Nos équipes se tiennent à votre disposition pour vous 
            fournir une expérience parfaite. N'hésitez pas à nous 
            contacter si vous avez la moindre question.
          </p>
        </Collapse>

        <Collapse title="Sécurité" classDesktop="desktop-24">
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour 
            nos hôtes que pour les voyageurs, chaque logement 
            correspond aux critères de sécurité établis par nos 
            services. En laissant une note aussi bien à l'hôte 
            qu'au locataire, cela permet à nos équipes de 
            vérifier que les standards sont bien respectés. 
            Nous organisons également des ateliers sur la 
            sécurité domestique pour nos hôtes.
          </p>
        </Collapse>
      </section>
    </main>
  );
}

export default About;
