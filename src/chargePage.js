// 1. Chargement du fichier JSON des logements
import logements from "./data/logements.json";

function ChargePage(numPage) {
  // 2. pour nos tests, on fixe à 6 le nb de logements par page
  const parPage = 6;

  // 3. Calcul du nombre de pages
  const totalEnregistrements = logements.length;
  const totalPage = Math.ceil(totalEnregistrements / parPage);  // arrondi supérieur

  // Sécurité : page invalide
  if (numPage < 1 || numPage > totalPage) {
    return {
      logements: [],
      totalPage
    };
  }
  // 4. Sélection des logements à retourner
  const start = (numPage - 1) * parPage;
  const end = start + parPage;

  return {
    logements: logements.slice(start, end),
    totalPage
  };
}

export default ChargePage;
