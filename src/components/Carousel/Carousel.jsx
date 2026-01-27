import { useState } from 'react';
import arrow from './Vector.png';
import './Carousel.scss';

/**
 * Composant Carousel
 *
 * Props :
 * - pictures : tableau d'urls des images
 *
 * Responsabilité :
 * - Afficher les images sous forme de carousel
 * - Afficher compteur et flèches si plus d'une image
 */
function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = pictures.length;

  if (!pictures || total === 0) return null; // KISS : rien à afficher

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);  // %total est modulo total
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  return (
    <div className="carousel">
      {/* Image actuelle */}
      <img
        src={pictures[currentIndex]}
        alt={`carousel ${currentIndex + 1}`}
        className="carousel__img"
      />

      {/* Compteur x / total */}
      {total > 1 && (
        <div className="carousel__counter">
          {currentIndex + 1}/{total}
        </div>
      )}

      {/* Flèches gauche/droite */}
      {total > 1 && (
        <>
          <button className="carousel__arrow carousel__arrow--left" onClick={prevImage}>
            <img src={arrow} alt='arrow'/>
          </button>
          <button className="carousel__arrow carousel__arrow--right" onClick={nextImage}>
            <img src={arrow} alt='arrow'/>
          </button>
        </>
      )}
    </div>
  );
}

export default Carousel;
