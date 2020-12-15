const { json } = require("body-parser");
var express = require("express");
var app = express();
const PORT = 3001;

const def = require("./definitions/definitions");
const db = require("./models");

if (process.argv[2] === "Compile") {
    def.compile();
}

app.use(json());

app.post("/api/Calculation", async (req, res) => {

    var val = await def.Calculate(
        req.body.pattern,
        req.body.thickness,
        req.body.quantity,
        req.body.width,
        req.body.length,
        req.body.tapeWrap
    );

    res.json(val);
});

app.post("/api/Definitions", (req, res) => {
    console.log(req.body);


    db.Type.find({
        Thickness
    }).then(response => {
        console.log(response)

        res.json(response)
    })
})

app.listen(PORT, () => {
    console.log("listening on port:" + PORT);
});