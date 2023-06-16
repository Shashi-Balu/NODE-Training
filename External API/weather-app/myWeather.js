const express = require("express");

const app = express();

const getWeatherInfoByServer = async (latitude, longitude) => {
    const {
        data: { current_weather: weather },
    } = await axios.get(WEATHER_API_URL, {
        params: {
            latitude,
            longitude,
            current_weather: true,
            time_zone: "IST",
        },
    });
    return { weather, latitude, longitude };
};

app.listen(8000, () => {
    console.log("Server is listening");
});
