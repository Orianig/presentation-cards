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
  generateGrid(influencerHTML, influcard);

  // const pieChartCard = document.createElement("div");
  // influencerHTML.appendChild(pieChartCard);
  // generatePieChart([], pieChartCard);
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
  // COL I
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

  let col1Div2HTML = document.createElement("div");
  col1Div2HTML.classList.add(
    "col-9",
    "col-md-8",
    "d-flex",
    "flex-column",
    "justify-content-start",
    "ps-2"
  );
  col1Div2HTML.innerHTML = `<span class="text-data-influName">influencerName</span>
  <div class="d-flex flex-row">
    <img class="text-icons" src="../img/instagram.png" alt="Icono" />
    <span class="text-data-influRed mb-2">Username</span>
  </div>
  <div class="d-flex flex-row">
    <img class="text-icons" src="../img/espana.png" alt="Icono" />
    <span class="text-data">
      PAIS -
      <i class="female-icon fa-solid fa-venus">
        <i class="male-icon fa-solid fa-mars"> </i
      ></i>
      sexo, edad
    </span>
  </div>`;
  headerDiv1HTML.appendChild(col1Div2HTML);
  headerHTML.appendChild(headerDiv1HTML);

  // COL II
  let col2Div1HTML = document.createElement("div");
  col2Div1HTML.classList.add(
    "order-2",
    "col-12",
    "col-md-4",
    "order-md-1",
    "d-flex",
    "flex-row",
    "justify-content-evenly"
  );

  let col2Div2HTML = document.createElement("div");
  col2Div2HTML.classList.add(
    "col-3",
    "d-flex",
    "flex-column",
    "align-items-center"
  );
  col2Div2HTML.innerHTML =
    '<div class="d-flex flex-column align-items-center"><span class="text-data text-primary">Reach</span><span>GRAFICO</span></div>';
  col2Div1HTML.appendChild(col2Div2HTML);

  let col2Div3HTML = document.createElement("div");
  col2Div3HTML.classList.add(
    "col-3",
    "d-flex",
    "flex-column",
    "align-items-center"
  );
  col2Div3HTML.innerHTML =
    '<div class="d-flex flex-column align-items-center"><span class="text-data text-info">Resonance</span><span>GRAFICO</span></div>';
  col2Div1HTML.appendChild(col2Div3HTML);

  let col2Div4HTML = document.createElement("div");
  col2Div4HTML.classList.add(
    "col-3",
    "d-flex",
    "flex-column",
    "align-items-center"
  );
  col2Div4HTML.innerHTML =
    '<div class="d-flex flex-column align-items-center"><span class="text-data text-info">Resonance</span><span>GRAFICO</span></div>';
  col2Div1HTML.appendChild(col2Div4HTML);
  headerHTML.appendChild(col2Div1HTML);

  // COL III
  let col3Div1HTML = document.createElement("div");
  col3Div1HTML.classList.add(
    "col-12",
    "col-md-4",
    "d-flex",
    "order-1",
    "order-md-2"
  );
  let col3SpanHTML = document.createElement("span");
  col3SpanHTML.classList.add("col-0", "col-md-9");
  col3Div1HTML.appendChild(col3SpanHTML);

  let col3Div2HTML = document.createElement("div");
  col3Div2HTML.classList.add(
    "options",
    "col-12",
    "col-md-3",
    "order-1",
    "order-md-2",
    "d-flex",
    "flex-wrap",
    "flex-md-column",
    "justify-content-around",
    "mb-md-0",
    "mb-1"
  );
  col3Div2HTML.innerHTML = `<span class="text-data d-flex align-items-center">
  <i class="fa-solid fa-right-from-bracket pe-2"></i>Salir
</span>
<span class="text-data d-flex align-items-center"
  ><i class="fa-solid fa-download pe-2"></i>Descargar
  influcard</span
>
<span class="text-data d-flex align-items-center"
  ><i class="fa-solid fa-eye pe-2"></i>Ver perfil</span
>
<span class="text-data d-flex align-items-center m-negative"
  >Datos actualizados a 24-04-2023 22:21:15</span
>`;
  col3Div1HTML.appendChild(col3Div2HTML);
  headerHTML.appendChild(col3Div1HTML);
  influencerHTML.appendChild(headerHTML);
};

// * Body

const generateGrid = (influencerHTML, influcard) => {
  let gridHTML = document.createElement("div");
  gridHTML.classList.add("grid");
  influencerHTML.appendChild(gridHTML);

  // * 1. AUDIENCE
  generateAudienceHTML(gridHTML, influcard);

  // * 2. PUBLICATIONS
  generatePublicationsHTML(gridHTML, influcard);

  // * 3 PERFORMANCE
  generatePerformanceHTML(gridHTML, influcard);
};

const generateAudienceHTML = (gridHTML, influcard) => {
  let allHTML = document.createElement("div");
  allHTML.classList.add(
    "g-col-12",
    "g-col-md-4",
    "d-flex",
    "flex-column",
    "gap-1"
  );

  allHTML.innerHTML = `
  <div class="card d-flex flex-row align-items-center gap-2 p-2">
    <div class="circle-element">
      <i class="text-icon-color fa-solid fa-users"></i>
    </div>
    <span class="col-tittle">AUDIENCIA</span>
  </div>
  <div class="card d-flex flex-row g-col-12 p-2">
    <span
      class="text-data col-4 d-flex flex-column align-items-center justify-content-center"
      >Audiencia<i class="mt-1 mb-1 fa-solid fa-users"></i
      ><span class="text-cards">CANTIDAD</span></span
    >
    <span
      class="text-data col-4 d-flex flex-column align-items-center justify-content-center"
      >Seguidores Fake<i class="mt-1 mb-1 fa-solid fa-users"></i
      ><span class="text-cards">CANTIDAD</span></span
    >
    <span
      class="text-data col-4 d-flex flex-column align-items-center justify-content-center"
      >Audiencia Real<i
        class="mt-1 mb-1 fa-solid fa-users opacity-50"
      ></i
      ><span class="text-cards">CANTIDAD</span></span
    >
  </div>
  <!-- COL AGE GRAPHIC -->
  <div class="card g-col-12 d-flex flex-column p-2 gap-2">
    <span class="graphic-tittle">Distribución por edad</span>
    <!-- graphic age-distribution -->
    <div class="age-graphic d-flex flex-row align-items-center">
      <span class="text-data col-2 text-center">edad</span>
      <div
        class="progress col-8"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar" style="width: 25%"></div>
      </div>
      <span class="text-data col-2 text-center">%</span>
    </div>
    <div class="age-graphic d-flex flex-row align-items-center">
      <span class="text-data col-2 text-center">edad</span>
      <div
        class="progress col-8"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar" style="width: 25%"></div>
      </div>
      <span class="text-data col-2 text-center">%</span>
    </div>
    <div class="age-graphic d-flex flex-row align-items-center">
      <span class="text-data col-2 text-center">edad</span>
      <div
        class="progress col-8"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar" style="width: 25%"></div>
      </div>
      <span class="text-data col-2 text-center">%</span>
    </div>
    <div class="age-graphic d-flex flex-row align-items-center">
      <span class="text-data col-2 text-center">edad</span>
      <div
        class="progress col-8"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar" style="width: 25%"></div>
      </div>
      <span class="text-data col-2 text-center">%</span>
    </div>
    <div class="age-graphic d-flex flex-row align-items-center">
      <span class="text-data col-2 text-center">edad</span>
      <div
        class="progress col-8"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar" style="width: 25%"></div>
      </div>
      <span class="text-data col-2 text-center">%</span>
    </div>
    <div class="age-graphic d-flex flex-row align-items-center mb-4">
      <span class="text-data col-2 text-center">edad</span>
      <div
        class="progress col-8"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar" style="width: 25%"></div>
      </div>
      <span class="text-data col-2 text-center">%</span>
    </div>
  </div>

  <div class="g-col-12 g-col-md-4 grid">
    <!-- COL GENDER GRAPHIC -->
    <div
      class="card g-col-12 g-col-md-6 d-flex flex-column p-2 justify-content-center"
    >
      <span class="graphic-tittle">Distribución por género</span>
      <div id="pieChart" class="p-2"></div>
    </div>
    <!-- COL COUNTRY GRAPHIC -->
    <div class="card g-col-12 g-col-md-6">
      <div class="d-flex flex-column p-2 gap-3">
        <span class="graphic-tittle">Distribución por país</span>
        <!-- graphic country-distribution -->
        <div class="age-graphic d-flex flex-row align-items-center">
          <span class="text-data col-2 text-center">
            <img
              class="text-icons"
              src="../img/espana.png"
              alt="Icono"
            />pais</span
          >
          <div
            class="progress col-8"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar bg-orange"
              style="width: 25%"
            ></div>
          </div>
          <span class="text-data col-2 text-center">%</span>
        </div>
        <div class="age-graphic d-flex flex-row align-items-center">
          <span class="text-data col-2 text-center">
            <img class="text-icons" src="../img/eeuu.png" alt="Icono" />
            pais</span
          >
          <div
            class="progress col-8"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar bg-orange"
              style="width: 25%"
            ></div>
          </div>
          <span class="text-data col-2 text-center">%</span>
        </div>
        <div class="age-graphic d-flex flex-row align-items-center">
          <span class="text-data col-2 text-center"
            ><img
              class="text-icons"
              src="../img/mexico.png"
              alt="Icono"
            />pais</span
          >
          <div
            class="progress col-8"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar bg-orange"
              style="width: 25%"
            ></div>
          </div>
          <span class="text-data col-2 text-center">%</span>
        </div>
        <div class="age-graphic d-flex flex-row align-items-center">
          <span class="text-data col-2 text-center"
            ><img
              class="text-icons"
              src="../img/francia.png"
              alt="Icono"
            />
            pais</span
          >
          <div
            class="progress col-8"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar bg-orange"
              style="width: 25%"
            ></div>
          </div>
          <span class="text-data col-2 text-center">%</span>
        </div>
        <div class="age-graphic d-flex flex-row align-items-center">
          <span class="text-data col-2 text-center"
            ><img
              class="text-icons"
              src="../img/italia.png"
              alt="Icono"
            />pais</span
          >
          <div
            class="progress col-8"
            role="progressbar"
            aria-label="Warning example"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar bg-orange"
              style="width: 25%"
            ></div>
          </div>
          <span class="text-data col-2 text-center">%</span>
        </div>
        <div class="age-graphic d-flex flex-row align-items-center">
          <span class="text-data col-2 text-center"
            ><img class="text-icons" src="../img/cargando.png"
            alt="Icono" / >pais</span
          >
          <div
            class="progress col-8"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar bg-orange"
              style="width: 25%"
            ></div>
          </div>
          <span class="text-data col-2 text-center">%</span>
        </div>
      </div>
    </div>
  </div>
  `;
  gridHTML.appendChild(allHTML);

  const pieChartCard = document.getElementById("pieChart");
  generatePieChart([], pieChartCard);
};

const generatePublicationsHTML = (gridHTML, influcard) => {
  let allHTML = document.createElement("div");
  allHTML.classList.add(
    "g-col-12",
    "g-col-md-4",
    "d-flex",
    "flex-column",
    "gap-1"
  );

  allHTML.innerHTML = `
  <div class="card d-flex flex-row align-items-center gap-2 p-2">
    <div class="circle-element">
      <i class="text-icon-color fa-solid fa-camera"></i>
    </div>
    <span class="col-tittle">PUBLICACIONES</span>
  </div>
  <!-- COL TERRITORY GRAPHIC -->
  <div class="card g-col-12 d-flex flex-column p-2">
    <span class="graphic-tittle"
      >Distribución de sus publicaciones por territorios
    </span>
    <div id="racediv"></div>
  </div>
  <!-- COL HORARY GRAPHIC -->
  <div class="card g-col-12 d-flex flex-column p-2">
    <span class="graphic-tittle"
      >Franja horaria de sus publicaciones</span
    >
    <div id="timediv"></div>
  </div>
  <!-- COL BRANDS GRAPHIC -->
  <div class="card g-col-12 d-flex flex-column p-2">
    <span class="graphic-tittle">Marcas con las que ha trabajado</span>
  </div>
  `;
  gridHTML.appendChild(allHTML);

  const racedivChartCard = document.getElementById("racediv");
  generateRaceDivChart(influcard, racedivChartCard);

  const timeChartCard = document.getElementById("timediv");
  generateTimeChart(influcard, timeChartCard);
};
const generatePerformanceHTML = (gridHTML, influcard) => {
  let allHTML = document.createElement("div");
  allHTML.classList.add(
    "g-col-12",
    "g-col-md-4",
    "d-flex",
    "flex-column",
    "gap-1"
  );

  allHTML.innerHTML = `
  <div class="card d-flex flex-row align-items-center gap-2 p-2">
            <div class="circle-element">
              <i class="text-icon-color fa-solid fa-chart-line"></i>
            </div>
            <span class="col-tittle">DESEMPEÑO</span>
          </div>
  `;
  gridHTML.appendChild(allHTML);
};
