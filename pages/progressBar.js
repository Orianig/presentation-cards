const generateHeaderGaugeCharts = () => {
  let progressBar1 = document.querySelector(".circular-progress.progress-blue");
  let progressBar2 = document.querySelector(
    ".circular-progress.progress-orange"
  );
  let progressBar3 = document.querySelector(".circular-progress.progress-aqua");
  let valueContainer1 = progressBar1.querySelector(".value-container");
  let valueContainer2 = progressBar2.querySelector(".value-container");
  let valueContainer3 = progressBar3.querySelector(".value-container");

  let progressValue1 = 100;
  let progressValue2 = 65;
  let progressValue3 = 40;

  valueContainer1.textContent = `${progressValue1}%`;
  valueContainer2.textContent = `${progressValue2}%`;
  valueContainer3.textContent = `${progressValue3}%`;
  // // Define el conic gradient como un valor de fondo
  // let conicGradient = "conic-gradient(blue 0%, gray 50%, blue 100%)";

  // // Aplica el conic gradient al fondo del elemento
  // progressBar.style.background = conicGradient;
};
