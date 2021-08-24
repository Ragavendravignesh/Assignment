class Provider {
    static async getWeather(city) {
        const apiKey = '0842d0bc723b7508eea0a1371141a174';
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`);

        console.log(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.apiKey}&units=metric`)
        const data = await weatherResponse.json();
        return data;
    }

    static async getLocalCurrency(city) {

        const currencyReposnse = await fetch(`https://restcountries.eu/rest/v2/capital/${city}`);

        const data = await currencyReposnse.json();

        return data;
    }

    static async findCity(long, lat) {
        const locResponse = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`)

        const data = await locResponse.json();

        return data.city;
    }
}

Provider.findCity(0.1278, 51.5074)
.then(res => {
    const city = document.getElementById('city');

    city.innerHTML = `City: ${res}`
})
.catch(err => console.log(err));

Provider.getWeather('London')
    .then(res => {
        const weather = document.getElementById('weather');

        weather.innerHTML = `Temperature: ${res.main.temp} Description: ${res.weather[0].main}`
    })
    .catch(err => { console.log(err) });

Provider.getLocalCurrency('London')
.then(res => {
    const currency = document.getElementById('currency');

    currency.innerHTML = `Currency name: ${res[0].currencies[0].name} and Symbol: ${res[0].currencies[0].symbol}`
})
.catch(err => { console.log(err) });


