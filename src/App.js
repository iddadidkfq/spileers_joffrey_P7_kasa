import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout global (Header + Footer)
import Layout from './components/Layout/Layout';

// Styles généraux
import './styles/main.scss';

// Pages
import Home from './pages/Home/Home';
import Logement from './pages/Logement/Logement';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';

// Données logements (import temporaire avant API)
import logements from './data/logements.json';

/**
 * Composant App
 *
 * Responsabilité :
 * - Initialiser le router
 * - Lire les données globales (logements)
 * - Distribuer les données aux pages via les props
 */
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Page Home : affiche la liste des logements */}
          <Route
            path="/"
            element={<Home logements={logements} />}
          />

          {/* Page Logement : affiche un logement selon son id */}
          <Route
            path="/logement/:id"
            element={<Logement logements={logements} />}
          />

          {/* Page About */}
          <Route path="/about" element={<About />} />

          {/* Page 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
