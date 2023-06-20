const { MongoClient } = require("mongodb");

const MONGO_DB_URL = "mongodb+srv://users:user1@cluster0.pkn90th.mongodb.net/";

const DATABASE_NAME = "LPU";

const mongoClient = new MongoClient(MONGO_DB_URL, { useNewUrlParser: true });

const myFunction = async () => {
    try {
        await mongoClient.connect();
        console.log("Connection was successful");
        const db = mongoClient.db(DATABASE_NAME);
        // const insertResult = await db.collection("users").insertMany([
        //     {
        //         name: "Shashi",
        //         email: "shashi@gmail.com",
        //         age: 21,
        //     },
        //     {
        //         name: "Harman",
        //         email: "harman@gmail.com",
        //         age: 21,
        //     },
        // ]);
        // console.log("Insert Success", insertResult);
        // .finally(() => mongoClient.close());

        //FIND START

        // const findResult = await db.collection("users").find({ name: /^S/ }).toArray();

        // const findResult = await db
        //     .collection("users")
        //     .find({ name: { $regex: /^S/, $options: "i" }, age: { $gt: 20 } })
        //     .toArray();
        // console.log(findResult);

        //FIND END
        // const deleteResult = await db.collection("users").deleteOne({
        //     _id: new Object("649060d8a11ce6c5fbef24bc"),
        // });
        // console.log(deleteResult);

        //UPDATE
        // const updateResult = await db.collection("users").updateOne(
        //     {
        //         _id: new Object("649060d8a11ce6c5fbef24bc"),
        //     },
        //     {
        //         $set: { age: 20 },
        //     }
        // );

        const updateResult = await db.collection("users").updateMany(
            {},
            {
                $inc: { age: 1 },
            }
        );
        console.log(updateResult);
    } catch (err) {
        console.log(err);
    }
};

myFunction();

// mongo db save data in cursor and then .toArray() converts data in json object
// updateMany({}, $inc: {age: 1}) ---> {} means select all
