const apiUrl = './assets/json/data.json';
let influencersList = [];

// * event when html is loaded
window.addEventListener("load", async () => {
    // * get influencers info
    await getInfluencerList();
    console.log(2);
});

const getInfluencerList = async () => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        influencersList = [
            data, data, data, data, data, data,
        ];
        console.log(influencersList);
        console.log(1);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}