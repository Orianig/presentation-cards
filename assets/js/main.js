
const apiUrl = './assets/json/data.json';
let influencersList = [];

// * event when html is loaded
window.addEventListener("load", async () => {
    // * get influencers info
    await getInfluencerList();
    generateInfluencerListHTML();
});

const getInfluencerList = async () => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        // * simulate influencer list
        influencersList = [
            data, data, data, data, data, data, data, data
        ];
        // influencer = data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// generate dinamic cards
const generateInfluencerListHTML = () => {
    const cardsContainerHTML = document.getElementById('cards-wrapper');
    influencersList.map(influencer => {
        let cardHTML = document.createElement('article');
        cardHTML.classList.add('custom-card', 'd-flex', 'flex-row', 'position-relative', 'p-2');
        // * bars button
        let barsButtonHTML = document.createElement('div');
        barsButtonHTML.classList.add('position-absolute', 'top-0', 'end-0', 'm-2');
        barsButtonHTML.innerHTML='<i class="fa-solid fa-bars"></i>';
        cardHTML.appendChild(barsButtonHTML);

        // * card left side
        let cardLeftSideHTML = document.createElement('div');
        cardLeftSideHTML.classList.add('d-flex', 'flex-column', 'justify-content-center', 'align-items-center', 'col-5', 'p-3');
        
        // picture container
        let pictureHTML = document.createElement('div');
        pictureHTML.classList.add('picture-container');

        let figureHTML = document.createElement('figure');
        figureHTML.innerHTML=`<img class='picture mb-2' src='${influencer.influcard.account_picture}' alt='account picture'/><div class='text-picture'><p>Ver Influcard</p></div>`
        pictureHTML.appendChild(figureHTML);

// Clic Event
const imageElement = figureHTML.querySelector('img');
imageElement.addEventListener('click', () => {
  window.location.href = './assets/pages/details.html';
});
        // influencer info

        const interestsArray = influencer.influcard.interests.split(',');
        const firstTwoInterests = interestsArray.slice(0, 2);
        const capitalizedInterests = firstTwoInterests.map(interest => {
            return interest.charAt(0).toUpperCase() + interest.slice(1);
          });
          const influencerInterest = capitalizedInterests.join(', ');
 

        let influencerInfoHTML = document.createElement('div');
        influencerInfoHTML.classList.add('d-flex', 'flex-column', 'justify-content-center', 'align-items-center');
        influencerInfoHTML.innerHTML = `<p class='text-data'><img class='text-icons' src='./assets/img/instagram.png' alt='Icono'>${influencer.influcard.username}</p><p class='text-data mb-0'>${influencer.influcard.gender === 1 ? 'Hombre' : 'Mujer'}, ${influencer.influcard.age} años</p>
        <p class='text-data'><img class='text-icons' src='./assets/img/espana.png' alt='Icono'>${influencer.influcard.country  === 'ES' ? 'España' :""}</p><p class='text-data mb-0' >${influencerInterest}...</p>`;

    cardLeftSideHTML.appendChild(pictureHTML);
        cardLeftSideHTML.appendChild(influencerInfoHTML);
        cardHTML.appendChild(cardLeftSideHTML);

        // * card right side
        const capitalizedName = influencer.influcard.name.charAt(0).toUpperCase() + influencer.influcard.name.slice(1);

        let cardRightSideHTML = document.createElement('div');
        cardRightSideHTML.classList.add('custom-text', 'd-flex', 'flex-column', 'col-7', 'p-2');
        cardRightSideHTML.innerHTML = `<span class='mt-2 fs-6 mb-2 fw-semibold'>${capitalizedName}</span>`;
        
        // Audience
        let audienceHTML = document.createElement('div');
        audienceHTML.classList.add('custom-flex-items');
        audienceHTML.innerHTML = `<i class='fa-solid fa-users col-1'></i><p class='col-6'>Audiencia:</p><p class='col-5 text-end'>${influencer.influcard.followers_formated
        }</p>`

        // Fakes
        const formatNumberWithK = (number) => {
            if (number < 1000) {
              return number.toFixed(2);
            } else {
              return (number / 1000).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " K";
            }
          };

        const fakes = influencer.influcard.fakes;
        const formattedFakes = formatNumberWithK(fakes);

        let fakesHTML = document.createElement('div');
        fakesHTML.classList.add('custom-flex-items');
        fakesHTML.innerHTML = `<i class='fa-solid fa-user-xmark col-1'></i><p class='col-6'>Fakes:</p><p class='col-5 text-end'>${formattedFakes
        }</p>`

        // Media Eng 
        let mediaEngHTML = document.createElement('div');
        mediaEngHTML.classList.add('custom-flex-items');
        mediaEngHTML.innerHTML = `<i class='fa-solid fa-heart col-1'></i><p class='col-6'>Media Eng:</p><p class='col-5 text-end'>${influencer.influcard.avg_engagement_formated
        }</p>`

        // Eng Rate 
        const engRate = influencer.influcard.er_audiencia; 
        const formattedEngRate = engRate.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); 

        let engRateHTML = document.createElement('div');
        engRateHTML.classList.add('custom-flex-items');
        engRateHTML.innerHTML = `<i class='fa-solid fa-heart-pulse col-1'></i><p class='col-6'>Eng Rate:</p><p class='col-5 text-end'>${formattedEngRate} %</p>`;

        // Impressions 
        let ImpressionsHTML = document.createElement('div');
        ImpressionsHTML.classList.add('custom-flex-items');
        ImpressionsHTML.innerHTML = `<i class='fa-solid fa-eye col-1'></i><p class='col-6'>Impresiones:</p><p class='col-5 text-end'>${influencer.influcard.impressions_formated
        }</p>`

        cardRightSideHTML.appendChild(audienceHTML);  
        cardRightSideHTML.appendChild(fakesHTML); 
        cardRightSideHTML.appendChild(mediaEngHTML);
        cardRightSideHTML.appendChild(engRateHTML);
        cardRightSideHTML.appendChild(ImpressionsHTML);

        cardHTML.appendChild(cardRightSideHTML);
        cardsContainerHTML.appendChild(cardHTML);
    });
}
