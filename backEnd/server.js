var express = require("express");
var app = express();
const PORT = 3001;

const def = require("./definitions/definitions");

app.get("/api/test", (req, res) => {
    console.log(req.body);
    
    res.json({
        hello: "world"
    });
});

app.listen(PORT, () => {
    console.log("listening on port:" + PORT);
});