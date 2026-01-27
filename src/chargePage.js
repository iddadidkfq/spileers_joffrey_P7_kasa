import logements from "./data/logements.json";

function ChargePage(numPage) {
  const parPage = 6;

  const totalEnregistrements = logements.length;
  const totalPage = Math.ceil(totalEnregistrements / parPage);

  // Sécurité : page invalide
  if (numPage < 1 || numPage > totalPage) {
    return {
      numPage,
      logements: [],
      totalPage
    };
  }

  const start = (numPage - 1) * parPage;
  const end = start + parPage;

  return {
    numPage,
    logements: logements.slice(start, end),
    totalPage
  };
}

export default ChargePage;
