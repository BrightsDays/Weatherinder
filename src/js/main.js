let fetchRain = (selector) => {
    async function load() {
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${selector}&APPID=e050de9385462b546f2d3a2143ebb69f`;
        let obj = await (await fetch(url)).json();
        weather.textContent = `${obj.weather[0].description}`;
    }
    
    load();
};

const cityInput = document.querySelector('.form__city'),
      showWeather = document.querySelector('.form__submit'),
      weather = document.querySelector('.form__answer');

showWeather.addEventListener('click', (e) => {
    e.preventDefault();

    fetchRain(cityInput.value);
});