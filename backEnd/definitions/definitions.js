var fs = require("fs");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/pricingDb", { useNewUrlParser: true });

var db = require("../models");


module.exports = {
    compile: () => {
        var containerArr = [];
        var thicknessArr = [];
        var nameArr = []

        fs.readFile("./definitions/Patterns.txt", 'utf8', function (err, data) {
            if (err) throw err;

            const names = data.split(`\r\n`);

            for (var i = 0; i < names.length; i++) {
                containerArr.push(names[i].split(" "))
            }

            for (var j = 0; j < containerArr.length; j++) {
                thicknessArr.push(containerArr[j][0]);
                containerArr[j].splice(0, 1);
                nameArr.push(containerArr[j][0]);
            }

            console.log(thicknessArr);
            console.log(nameArr);

            for (var b = 0; b < nameArr.length; b++) {
                db.Prices.create({
                    Thickness: thicknessArr[b],
                    Pattern: nameArr[b]
                }).then(mongObj => console.log(mongObj)).catch(err => console.log(err));
            }
        });
    },
    Calculate: (width, length, IG, pattern) => {

    }
};