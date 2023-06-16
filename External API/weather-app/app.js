const express = require("express");
const { getWeatherInfoByAddress } = require("./weatherUtil");

const app = express();
const PORT = 8000;

app.get("/weather", async (req, res) => {
    const { address } = req.query;
    try {
        const weatherInfo = await getWeatherInfoByAddress(address);
        return res.status(200).send(weatherInfo);
    } catch (err) {
        return res.status(400).send({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Weather App is running on PORT: ${PORT}`);
});
