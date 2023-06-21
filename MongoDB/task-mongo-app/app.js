require("./mongooseFile"); //run whole file automatically

const express = require("express");
const User = require("./models/User");
const app = express();
app.use(express.json());

const USER_EDITABLE_FIELDS = ["name", "age", "password"];

app.post("/add-user", async (req, res) => {
    try {
        // const data = req.body;
        const { name, email, age, password } = req.body;
        const user = new User({ name, email, age, password });
        await user.save();
        console.log(`User ${user.name} just added`);
        return res.status(201).send(user);
    } catch (err) {
        console.log(err);
    }
});

app.get("/find-user", async (req, res) => {
    const user = await User.findOne({ age: 21 });
    console.log("User with age 21 found");
    return res.status(200).send(user);
});

app.put("/user/:userId", async (req, res) => {
    try {
        const { id } = req.params;
        const dataToUpdate = req.body;
        let updateObject = {};
        for (let field of USER_EDITABLE_FIELDS) {
            if (dataToUpdate[field]) {
                updateObject[field] = dataToUpdate[field];
            }
        }
        const updateResult = User.updateOne({ _id: id }, { $set: { updateObject } });
        if ((await updateResult).matchedCount) {
            console.log(`${id} updated successfully`);
            return res.status(200).send({
                message: "Update successful",
            });
        }
        console.log("Update failed");
        return res.status(404).send({ message: "Update failed" });
    } catch (err) {
        console.log(err);
    }
});

const PORT = 8080;

app.listen(() => {
    console.log(`Tasks Mongo App is running on Port: ${PORT}`);
});
