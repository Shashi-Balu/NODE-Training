const axios = require("axios");

const WEATHER_API_URL = "https://localhost:8080";

const getWeatherByAddress = async (address) => {
    let { data: weatherData } = await axios.get(`${WEATHER_API_URL}/weather`, {
        params: {
            address,
        },
    });
    return weatherData;
};

module.exports(getWeatherByAddress);
//https://api.open-meteo.com/v1/forecast?latitude=22.56&longitude=88.35&current_weather=true&timezone=IST
