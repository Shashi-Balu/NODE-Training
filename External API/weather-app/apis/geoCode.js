const axios = require("axios");
const GEO_CODE_API_URL = "https://geocode.maps.co/search";

const geoCodeByAddress = async (address) => {
    const { data: geoCodeData } = await axios.get(GEO_CODE_API_URL, {
        params: {
            q: address,
        },
    });

    if (!geoCodeData.length) {
        throw new Error("Address could not be geocoded");
    }

    const { lat: latitude, lon: longitude } = geoCodeData[0];
    return { latitude, longitude };
};

module.exports = { geoCodeByAddress };
