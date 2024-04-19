const apiKey = "d4113a731922362d804a65c656201c43";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather`;

const locationInp = document.querySelector("#city");
const searchBtn = document.querySelector(".searchBtn");
const locationEl = document.querySelector("#location");
const temperatureEl = document.querySelector("#temperature");
const descriptionEl = document.querySelector("#description");
const errorEl = document.querySelector(".error");


searchBtn.addEventListener("click", async() => {
  const cityName = locationInp.value;
//   console.log(cityName)
  if (cityName) {
    weatherinfo(cityName)
  }
});

function weatherinfo(cityName) {
  const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`;
  return new Promise(async (resolve, reject) => {
    try {
      let { data } = await axios.get(geoUrl);
    //   console.log(data[0].name,",", data[0].state);
      locationEl.innerText = `${data[0].name}, ${data[0].state}`
      const { lat, lon } = data[0];
    //   console.log(lat, lon);
      let res = await axios.get(
          `${apiUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );
        console.log(res.data);

        temperatureEl.innerHTML = `
         ${Math.round(res.data.main.temp)}°c
        `
        descriptionEl.innerHTML = `
        feels like- 
        ${res.data.main.feels_like}
        ||
        humidity-
        ${res.data.main.humidity}%
        ||
        pressure- 
        ${res.data.main.pressure}
        ||
        temp max-
        ${res.data.main.temp_max}°c        
        ||
        temp min-
        ${res.data.main.temp_min}°c
        `
        errorEl.style.display = "none"
        document.querySelector('.weather-info').style.display='block'
    } catch (error) {
        console.log(error);
        errorEl.innerText= `Please type a valid city name`
        errorEl.style.display = "block"
      document.querySelector('.weather-info').style.display='none'
    }
  });
}
