console.log("Backend Started");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");


//app configurations
const app = express();
app.use(cors());
dotenv.config();
const port = process.env.PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//using the app routes
app.get("/", (req, res) => {
    res.send("Hello world");
})
app.use("/api/v1", require("./Routes/SampleRouter"));
app.listen(port, ()=>
{
    console.log("Server started on port: " + port);
})