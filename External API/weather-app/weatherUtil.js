const { geoCodeByAddress } = require("./apis/geoCode");
const { getWeatherInfoByGeoCode } = require("./apis/weatherApi");

const getWeatherInfoByAddress = async (address) => {
    const { latitude, longitude } = await geoCodeByAddress(address);
    const weatherData = await getWeatherInfoByGeoCode(latitude, longitude);
    return weatherData;
};

module.exports = { getWeatherInfoByAddress };
