const express = require("express");
const { getWeatherByAddress } = require("./weatherAPI");

const app = express();
app.use(express.json());

app.post("/get-weather", async (req, res) => {
    try {
        let weatherData = await getWeatherByAddress(req.body.address);
        return res.status(200).send(weatherData);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server is listening", PORT);
});
