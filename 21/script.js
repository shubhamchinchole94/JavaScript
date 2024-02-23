const button = document.getElementById('get-location-button');

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

// fetching loaction is asynchronous task



// From weather app
async function getData(lat, long) {
    const promise = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=f867b8200bc7464fa63154249232612&q=${lat},${long}&aqi=yes`
    );

    return await promise.json()
}


 async function gotLocation(position) {
    const result = await getData(position.coords.latitude, position.coords.longitude);

    console.log(result);

    cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = result.current.temp_c + " °C🌡";

}

function failedToGet() {

    console.log("There was some issue");
}

button.addEventListener('click', async () => {

     navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);

    
 


});