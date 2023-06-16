const express = require("express");

const app = express();
const userIds = [123, 456, 789, 112];

app.get("/isPresent/:id", (req, res) => {
    const { id } = req.query;

    userIds.forEach((element) => {
        if (parseInt(id) == element) {
            console.log("Value");
            return res.status(200);
        }
        console.log("Unvalue");
        return res.status(404);
    });
});

app.listen(8000, () => {
    console.log("Server 8000 is running");
});
