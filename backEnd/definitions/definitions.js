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
                }).then(mongObj => console.log(mongObj))
                    .catch(err => console.log(err));
            }
        });
    },
    Calculate: (width, length, IG, pattern, thickness) => {
        db.Prices.find({ Pattern: pattern, Thickness: thickness })
            .lean()
            .then(data => {

                console.log(data);

                let sqInch = width * length;
                let sqFt = sqInch / 144;
                let quantity = req.quantity;

                if (quantity <= 5) {
                    quantity = data.oneToFive
                } else if (quantity >= 6 && quantity <= 10) {
                    quantity = data.sixToTen;
                } else if (quantity >= 11 && quantity <= 25) {
                    quantity = data.elevenToTwentyFive
                }else if (quantity >= 26 && quantity <= 50){
                    quantity = data.twentySixToFifty;
                }else if (quantity >= 51 && quantity <= 100){
                    quantity = data.fiftyOneToOneHundred;
                }else if (quantity >= 101 && quantity <= 205){
                    quantity = data.oneHundredOneToTwoHundredFive;
                }else if (quantity >= 251 && quantity <= 500){
                    quantity = data.max;
                }

                let cost = quantity * sqFt

                return cost
            });
    }
};