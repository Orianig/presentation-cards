const apiUrl = "/assets/json/data.json";
let influencer = {};

// * event when html is loaded
window.addEventListener("load", async () => {
  // * get influencer by id (simulation)
  await getInfluencerById();
  generateInfluencerDashboardHTML();
});

const getInfluencerById = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    // * simulate influencer data
    influencer = data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const generateInfluencerDashboardHTML = () => {
  const influencerHTML = document.getElementById("container-ppal");
  const { influcard } = influencer;
  generateHeader(influencerHTML, influcard);

  // // * 1 Audience
  // // * 1.1 Audience - Pie Chart
  // const pieChartCard = document.createElement("div");
  // influencerHTML.appendChild(pieChartCard);
  // generatePieChart([], pieChartCard);
  // // * 2 Publications

  // // * 3 Performance

  // // * Impressions
};

// * Header
const generateHeader = (influencerHTML, influcard) => {
  let headerHTML = document.createElement("header");
  headerHTML.classList.add(
    "d-flex",
    "flex-wrap",
    "justify-content-between",
    "mt-4"
  );
  // divs
  let headerDiv1HTML = document.createElement("div");
  headerDiv1HTML.classList.add(
    "d-flex",
    "col-12",
    "col-md-4",
    "order-0",
    "order-md-0"
  );
  let headerDiv2HTML = document.createElement("div");
  headerDiv2HTML.classList.add("col-3", "col-md-2");
  // picture container
  let pictureHTML = document.createElement("figure");
  pictureHTML.classList.add("picture-container", "position-relative");

  let pictureProfileHTML = document.createElement("img");
  pictureProfileHTML.classList.add("picture-profile", "mb-2");
  pictureProfileHTML.src = influcard.account_picture;
  pictureProfileHTML.alt = "account picture";

  // Crear la imagen del icono de las redes sociales
  let iconSocialMediaHTML = document.createElement("img");
  iconSocialMediaHTML.classList.add(
    "icon-social-media",
    "position-absolute",
    "top-0",
    "start-0"
  );
  iconSocialMediaHTML.src = "../img/instagram circle.png";
  iconSocialMediaHTML.alt = "...";

  // Agregar los elementos de imagen al contenedor
  pictureHTML.appendChild(iconSocialMediaHTML);
  pictureHTML.appendChild(pictureProfileHTML);
  headerDiv2HTML.appendChild(pictureHTML);
  headerDiv1HTML.appendChild(headerDiv2HTML);
  headerHTML.appendChild(headerDiv1HTML);
  influencerHTML.appendChild(headerHTML);
};
