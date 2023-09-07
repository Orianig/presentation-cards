const apiUrl = "../json/data.json";
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
};

// * Header
const generateHeader = (influencerHTML, influcard) => {
  let headerHTML = document.createElement("header");
  headerHTML.classList.add(
    "d-flex",
    "flex-wrap",
    "justify-content-between",
    "mt-2",
    "mb-4",
    "mb-md-0"
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
  pictureProfileHTML.classList.add("picture-profile", "mb-2", "ms-4");
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
  iconSocialMediaHTML.src = "../assets/img/instagram circle.png";
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
    "ps-2",
    "ms-2"
  );
  col1Div2HTML.innerHTML = `<span class="text-data-influName">${
    influcard.name
  }</span>
  <div class="d-flex flex-row align-items-center mb-2">
    <img class="text-icons" src="../assets/img/instagram.png" alt="Icono" />
    <span class="text-data-influRed">${influcard.username}</span>
  </div>
  <div class="d-flex flex-row">
    <img class="text-icons" src="../assets/img/espana.png" alt="Icono" />
    <span class="text-data">
        ${influcard.country} -
        ${
          influcard.gender === 1
            ? `<i class="male-icon fa-solid fa-mars"></i>`
            : `<i class="female-icon fa-solid fa-venus"></i>`
        }
        ${influcard.gender === 1 ? "Hombre" : "Mujer"}, ${influcard.age} años
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
  col2Div2HTML.innerHTML = `<div class="col-3 d-flex flex-column align-items-center">
    <div class="text-data text-primary">Reach</div>
    <span class="mt-2 circular-progress progress-blue">
      <div class="value-container"></div>
    </span>
  </div>`;
  col2Div1HTML.appendChild(col2Div2HTML);

  let col2Div3HTML = document.createElement("div");
  col2Div3HTML.classList.add(
    "col-3",
    "d-flex",
    "flex-column",
    "align-items-center"
  );
  col2Div3HTML.innerHTML = `<div class="col-3 d-flex flex-column align-items-center">
  <div class="text-data text-warning">Relevance</div>
  <span class="mt-2 circular-progress progress-orange">
    <div class="value-container"></div>
  </span>
</div>`;
  col2Div1HTML.appendChild(col2Div3HTML);

  let col2Div4HTML = document.createElement("div");
  col2Div4HTML.classList.add(
    "col-3",
    "d-flex",
    "flex-column",
    "align-items-center"
  );
  col2Div4HTML.innerHTML = `<div class="col-3 d-flex flex-column align-items-center">
    <div class="text-data text-info">Resonance</div>
    <span class="mt-2 circular-progress progress-aqua">
      <div class="value-container"></div>
    </span>
  </div>`;
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
  col3Div2HTML.innerHTML = `<span id="exit" class="cursor-pointer text-data d-flex align-items-center" style="cursor: pointer;">
  <i class="fa-solid fa-right-from-bracket pe-2 cursor-pointer"></i>Salir
</span>
<span id="downloadButton" class="cursor-pointer text-data d-flex align-items-center" style="cursor: pointer;"
  ><i class="fa-solid fa-download pe-2 cursor-pointer"></i>Descargar
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
  generateHeaderGaugeCharts();

  const exitElement = document.getElementById("exit");
  exitElement.addEventListener("click", () => {
    window.location.href = "/index.html";
  });

  const downloadButton = document.getElementById("downloadButton");
  downloadButton.addEventListener("click", () => {
    showLoader();
    setTimeout(() => {
      downloadDashboardPrintScreen();
      hideLoader();
    }, 1000);
  });
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
      ><span class="text-cards">${influcard.followers_formated}</span></span
    >
    <span
      class="text-data col-4 d-flex flex-column align-items-center justify-content-center"
      >Seguidores Fake<i class="mt-1 mb-1 fa-solid fa-users"></i
      ><span class="text-cards">${influcard.fake_followers_formated}%</span></span
    >
    <span 
      class="text-data col-4 d-flex flex-column align-items-center justify-content-center"
      >Audiencia Real<i
        class="mt-1 mb-1 fa-solid fa-users opacity-50"
      ></i
      ><span class="text-cards">${influcard.real_followers_formated}</span></span
    >
  </div>
  <!-- COL AGE GRAPHIC -->
  <div class="card g-col-12 d-flex flex-column p-2 gap-2" id='distribution-age-chart'>    
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
      <div class="d-flex flex-column p-2 gap-4">
        <span class="graphic-tittle">Distribución por país</span>
        <!-- graphic country-distribution -->
        <div class="age-graphic d-flex flex-row align-items-center">
          <span class="text-data col-2 text-center">
            <img
              class="text-icons"
              src="../assets/img/espana.png"
              alt="Icono"
            />ES</span
          >
          <div
            class="progress col-8"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="47.37"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar bg-orange"
              style="width: 47.37%"
            ></div>
          </div>
          <span class="text-data col-2 text-center">47.37%</span>
        </div>
        <div class="age-graphic d-flex flex-row align-items-center">
          <span class="text-data col-2 text-center">
            <img class="text-icons" src="../assets/img/eeuu.png" alt="Icono" />
            US</span
          >
          <div
            class="progress col-8"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="11.84"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar bg-orange"
              style="width: 11.84%"
            ></div>
          </div>
          <span class="text-data col-2 text-center">11.84%</span>
        </div>
        <div class="age-graphic d-flex flex-row align-items-center">
          <span class="text-data col-2 text-center"
            ><img
              class="text-icons"
              src="../assets/img/mexico.png"
              alt="Icono"
            />MX</span
          >
          <div
            class="progress col-8"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="5.67"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar bg-orange"
              style="width: 5.67%"
            ></div>
          </div>
          <span class="text-data col-2 text-center">5.67%</span>
        </div>
        <div class="age-graphic d-flex flex-row align-items-center">
          <span class="text-data col-2 text-center"
            ><img
              class="text-icons"
              src="../assets/img/francia.png"
              alt="Icono"
            />
            FR</span
          >
          <div
            class="progress col-8"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="4.05"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar bg-orange"
              style="width: 4.05%"
            ></div>
          </div>
          <span class="text-data col-2 text-center">4.05%</span>
        </div>
        <div class="age-graphic d-flex flex-row align-items-center">
          <span class="text-data col-2 text-center"
            ><img
              class="text-icons"
              src="../assets/img/italia.png"
              alt="Icono"
            />IT</span
          >
          <div
            class="progress col-8"
            role="progressbar"
            aria-label="Warning example"
            aria-valuenow="3.88"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar bg-orange"
              style="width: 3.88%"
            ></div>
          </div>
          <span class="text-data col-2 text-center">3.88%</span>
        </div>
        <div class="age-graphic d-flex flex-row align-items-center">
          <span class="text-data col-2 text-center"
            ><img class="text-icons" src="../assets/img/cargando.png"
            alt="Icono" / >Otro</span
          >
          <div
            class="progress col-8"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="27.19"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar bg-orange"
              style="width: 27.19%"
            ></div>
          </div>
          <span class="text-data col-2 text-center">27.19%</span>
        </div>
      </div>
    </div>
  </div>
  `;
  gridHTML.appendChild(allHTML);

  const distributionAgeCard = document.getElementById("distribution-age-chart");
  generateDistributionAgeChart(influcard.insightsAge, distributionAgeCard);

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
    <div class="d-flex flex-wrap gap-3 align-items-center justify-content-center" id="brand-list"></div>
  </div>
  `;
  gridHTML.appendChild(allHTML);

  const brandListContainer = document.getElementById("brand-list");
  generateBrandsHtml(influcard.brands_images, brandListContainer);

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
<!-- III COL - I ROW -->
<div class="card d-flex flex-column gap-2 p-2">
  <div
    class="d-flex flex-row align-items-center justify-content-between"
  >
    <div class="d-flex gap-2 align-items-center">
      <div class="circle-element-card">
        <i class="fa-solid fa-users"></i>
      </div>
      <span class="text-cards">Audiencia</span>
    </div>
    <span class="text-cards">${influcard.followers_formated}</span>
  </div>
  <div
    class="d-flex flex-row align-items-center justify-content-between"
  >
    <div class="d-flex flex-row gap-2 align-items-center">
      <div class="circle-element-card">
        <i class="fa-solid fa-user"></i>
      </div>
      <span class="text-cards">Alcance</span>
    </div>
    <span class="text-cards">${influcard.reach_formated}</span>
  </div>
</div>
<!-- III COL - II ROW -->
<div class="card d-flex flex-column gap-2 p-2">
  <div
    class="d-flex flex-row align-items-center justify-content-between"
  >
    <div class="d-flex gap-2 align-items-center">
      <div class="circle-element-card bg-impress">
        <i class="fa-solid fa-fingerprint"></i>
      </div>
      <span class="text-cards">Impresiones</span>
    </div>
    <span class="text-cards">${influcard.avg_impressions_formated}</span>
  </div>
  <div class="d-flex flex-row">
    <div
      class="col-6 d-flex flex-column align-items-center border-end"
    >
      <span class="text-cards">126.1%</span
      ><span class="text-data">Alcance</span>
    </div>
    <div class="col-6 d-flex flex-column align-items-center">
      <span class="text-cards">44.63%</span
      ><span class="text-data">Audiencia</span>
    </div>
  </div>
</div>
<!-- III COL - III ROW -->
<div class="card d-flex flex-column gap-2 p-2">
  <div
    class="d-flex flex-row align-items-center justify-content-between"
  >
    <div class="d-flex gap-2 align-items-center">
      <div class="circle-element-card bg-rep">
        <i class="fa-solid fa-play"></i>
      </div>
      <span class="text-cards">Reproducciones</span>
    </div>
    <span class="text-cards">${influcard.vplays_formated}</span>
  </div>
  <div class="d-flex flex-row">
    <div
      class="col-6 d-flex flex-column align-items-center border-end"
    >
      <span class="text-cards">62%</span
      ><span class="text-data">Alcance</span>
    </div>
    <div class="col-6 d-flex flex-column align-items-center">
      <span class="text-cards">21.6%</span
      ><span class="text-data">Audiencia</span>
    </div>
  </div>
</div>
<!-- III COL - IV ROW -->
<div class="card d-flex flex-column gap-2 p-2">
  <div
    class="d-flex flex-row align-items-center justify-content-between"
  >
    <div class="d-flex gap-2 align-items-center">
      <div class="circle-element-card bg-eng">
        <i class="fa-solid fa-heart"></i>
      </div>
      <span class="text-cards">Engagement</span>
    </div>
    <span class="text-cards">${influcard.engagement_formated}</span>
  </div>
  <div class="d-flex flex-row">
    <div
      class="col-6 d-flex flex-column align-items-center border-end"
    >
      <span class="text-cards">${influcard.er_alcance}%</span
      ><span class="text-data">Alcance</span>
    </div>
    <div class="col-6 d-flex flex-column align-items-center">
      <span class="text-cards">${influcard.er_audiencia}%</span
      ><span class="text-data">Audiencia</span>
    </div>
  </div>
</div>
<!-- III COL - V ROW -->
<div class="card g-col-12 d-flex flex-column p-2">
  <span class="graphic-tittle"
    >Engagement rate según día de publicación</span
  >
  <div id="engdiv"></div>
  <script>
    const engChartCard = document.getElementById("engdiv");
    generateEngChart([], engChartCard);
  </script>
</div>
  `;
  gridHTML.appendChild(allHTML);

  const engChartCard = document.getElementById("engdiv");
  generateEngChart(influcard, engChartCard);
};

const generateBrandsHtml = (imageList = [], elementHTML) => {
  let slicedImgList = [...imageList];
  if (slicedImgList.length >= 8) {
    slicedImgList = slicedImgList.slice(0, 8);
  }
  slicedImgList.map((imageItem) => {
    let brandImgHTML = document.createElement("img");
    brandImgHTML.style.height = "5rem";
    brandImgHTML.src = imageItem.image;
    brandImgHTML.alt = imageItem.name;
    elementHTML.appendChild(brandImgHTML);
  });
};

const generateDistributionAgeChart = (insightsList, elementHtml) => {
  const titleHtml = document.createElement("div");
  titleHtml.classList.add("graphic-tittle");
  titleHtml.innerText = "Distribución por edad";
  elementHtml.appendChild(titleHtml);

  const insightsByAgeGeneralList = groupAndCalculatePercentages(insightsList);

  insightsByAgeGeneralList.map((insight) => {
    const insightsContainerHtml = document.createElement("div");
    insightsContainerHtml.classList.add(
      "age-graphic",
      "d-flex",
      "flex-row",
      "align-items-center"
    );
    insightsContainerHtml.innerHTML = `
      <span class="text-data col-2 text-center">${insight.age_range}</span>
      <div
         class="progress col-8"
         role="progressbar"
         aria-label="Example with label"
         aria-valuenow="${insight.percentage}"
         aria-valuemin="0"
       aria-valuemax="100"
       >
       <div class="progress-bar" style="width: ${insight.percentage}%"></div>
       </div>
        <span class="text-data col-2 text-center">${insight.percentage}%</span>
    `;
    elementHtml.appendChild(insightsContainerHtml);
  });
};

const groupAndCalculatePercentages = (insightsAge) => {
  // Crear un objeto para almacenar las sumas de cantidades por rango de edad
  const ageGroups = {};

  // Iterar a través de los datos de insightsAge
  insightsAge.forEach((item) => {
    const ageRange = item.age_range;
    const amount = parseInt(item.amount);

    // Sumar la cantidad al rango de edad correspondiente o crearlo si no existe
    if (!ageGroups[ageRange]) {
      ageGroups[ageRange] = amount;
    } else {
      ageGroups[ageRange] += amount;
    }
  });

  // Calcular los porcentajes para cada grupo de edad
  const totalAmount = Object.values(ageGroups).reduce(
    (total, amount) => total + amount,
    0
  );
  const ageGroupedPercentages = {};

  for (const ageRange in ageGroups) {
    const amount = ageGroups[ageRange];
    const percentage = (amount / totalAmount) * 100;
    ageGroupedPercentages[ageRange] = percentage;
  }

  // Convertir el resultado en una lista de objetos
  const result = Object.entries(ageGroupedPercentages).map(
    ([ageRange, percentage]) => ({
      age_range: ageRange,
      percentage: parseFloat(percentage.toFixed(2)), // Redondear a dos decimales
    })
  );

  return result;
};

const downloadDashboardPrintScreen = () => {
  const width = 1720;
  const height = 900;

  const scale = 1;

  const canvasWidth = width * scale;
  const canvasHeight = height * scale;

  html2canvas(document.body, {
    width: canvasWidth,
    height: canvasHeight,
    scale: scale,
  }).then((canvas) => {
    const downloadLink = document.createElement("a");
    downloadLink.href = canvas.toDataURL("image/png");
    downloadLink.download = "captura_de_pantalla.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  });
};

const showLoader = () => {
  let timerInterval;
  Swal.fire({
    title: "Loading...",
    timer: 2000,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
};
