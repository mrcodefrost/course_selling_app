const express = require("express");
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter } = require('./routes/admin');
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/course", courseRouter);


async function main() {
    console.log("Connecting to mongodb");
    await mongoose.connect(process.env.MONGODB_URL);
    app.listen(3000);
    console.log("Connected to mongodb");
    console.log("Listening on port 3000");
}


main();