let fetchRain = (selector, token) => {
    async function load() {
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${selector}&APPID=${token}`;
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

    fetchRain(cityInput.value, '');
});