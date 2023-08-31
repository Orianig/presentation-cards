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
            data, data, data, data, data, data,
        ];
        // influencer = data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const generateInfluencerListHTML = () => {
    const cardsContainerHTML = document.getElementById('cards-wrapper');
    influencersList.map(influencer => {
        let cardHTML = document.createElement('article');
        cardHTML.classList.add('custom-card', 'd-flex', 'flex-row', 'position-relative');
        // * bars button
        let barsButtonHTML = document.createElement('div');
        barsButtonHTML.classList.add('position-absolute', 'top-0', 'end-0', 'm-2');
        barsButtonHTML.innerHTML='<i class="fa-solid fa-bars"></i>';
        cardHTML.appendChild(barsButtonHTML);

        // * card left side
        let cardLeftSideHTML = document.createElement('div');
        cardLeftSideHTML.innerHTML = `<span class='cosita linda'>${influencer.influcard
            .username}</span><p>${influencer.influcard.username}</p>`;
        cardHTML.appendChild(cardLeftSideHTML);

        // * card right side
        let cardRightSideHTML = document.createElement('div');
        cardRightSideHTML.innerHTML = '<span>este es el lado der</span>';
        cardHTML.appendChild(cardRightSideHTML);

        cardsContainerHTML.appendChild(cardHTML);


    });

}