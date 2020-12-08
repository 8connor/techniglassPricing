const { json } = require("body-parser");
var express = require("express");
var app = express();
const PORT = 3001;

const def = require("./definitions/definitions");

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

app.listen(PORT, () => {
    console.log("listening on port:" + PORT);
});