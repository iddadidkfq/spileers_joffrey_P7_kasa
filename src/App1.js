import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import ChargePage from "./chargePage";

// Layout global (Header + Footer)
import Layout from './components/Layout/Layout';

// Styles généraux
import './styles/main.scss';

// Pages
import Home from './pages/Home/Home1';
import Logement from './pages/Logement/Logement';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';


/**
 * Composant App
 *
 * Responsabilité :
 * - Initialiser le router
 * - Lire les données globales (logements)
 * - Distribuer les données aux pages via les props
 */
function App() {

  // 1. UseState pour le n° de page courant
  const [page, setPage] = useState(1);

  // 2. Chargement des logements et nb total de pages
  const { logements, totalPage } = ChargePage(page);
  
	// 3. Définition des routes avec leur composant et leurs PROPS
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Page Home : affiche la liste des logements */}
          <Route
            path="/"
            element={<Home logements={logements} numPage={page} onSetPage={setPage} totalPage = {totalPage}/>}
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
