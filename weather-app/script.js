const cityInput = document.getElementById('city-input')
const button = document.getElementById('search-button')
const liveLocation = document.getElementById("live-location");

const cityDetails = document.getElementById('city-details')
const cityTime = document.getElementById('city-time')
const cityTemp = document.getElementById('city-temp')
const cityAqi = document.getElementById('city-aqi')


async function getWeatherData(cityname){
    const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=9bde330ad10a44aaa35150948240706&q=${cityname}&aqi=yes`
    )
    return await response.json();
}

async function curLocWeatherData(lat, long){
    const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=9bde330ad10a44aaa35150948240706&q=${lat},${long}&aqi=yes`
    )
    return await response.json();
}


button.addEventListener('click', async () => {

    cityName = cityInput.value;
    const response = await getWeatherData(cityName);

    cityDetails.innerText = response.location.name + ", " + response.location.region + ", " + response.location.country
    cityTime.innerText = response.location.localtime
    cityTemp.innerText = response.current.temp_c + " °C"
    const img = response.current.condition.icon;
    const condition = response.current.condition.text;
    cityAqi.innerHTML = `<h3>${condition}</h3>   <img src=${img}></img>`

    console.log(response);
})

async function success(position){
    console.log(position);
    const response = await curLocWeatherData(position.coords.latitude, position.coords.longitude);

    cityDetails.innerText = response.location.name + ", " + response.location.region + ", " + response.location.country
    cityTime.innerText = response.location.localtime
    cityTemp.innerText = response.current.temp_c + " °C"
    const img = response.current.condition.icon;
    const condition = response.current.condition.text;
    cityAqi.innerHTML = `<h3>${condition}</h3>   <img src=${img}></img>`

    console.log(response);
}
function failure(){
    cityDetails.innerText = "Failed to get location";
}

liveLocation.addEventListener("click", async () => {
    navigator.geolocation.getCurrentPosition(success, failure)
})