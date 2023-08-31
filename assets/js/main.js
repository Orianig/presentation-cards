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
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const generateInfluencerListHTML = () => {
    const cardsContainerHTML = document.getElementById('cards-wrapper');
    influencersList.map(influencer => {
        let cardHTML = document.createElement('article');
        cardHTML.classList.add('custom-card', 'd-flex', 'flex-row', 'position-relative');
        cardHTML.innerHTML = 'kaka'
        cardsContainerHTML.appendChild(cardHTML);
    });

}