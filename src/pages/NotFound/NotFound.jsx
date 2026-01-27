import { Link } from 'react-router-dom';
import './NotFound.scss';

function NotFound() {
  return (
    <section className="notfound">
      <div className="notfound__code">404</div>

      <p className="notfound__text">
        Oups! La page que vous demandez n'existe pas.
      </p>

      <Link to="/" className="notfound__link">
        Retourner sur la page d'accueil
      </Link>
    </section>
  );
}

export default NotFound;
