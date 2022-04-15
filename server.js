const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.static("node_modules"));
app.use(express.static("public"));

app.get("/", (req, res) => {

    res.sendFile(__dirname + "/index.html");

});

app.listen(PORT);