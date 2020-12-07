var fs = require("fs");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/pricingDb", { useNewUrlParser: true });

var db = require("../models");

module.exports = {
    compile: () => {
        fs.readFile("./definitions/Patterns.txt", 'utf8', function (err, data) {
            if (err) throw err;
            let containerArr = [];
            let thicknessArr = [];
            let nameArr = [];

            const names = data.split(`\r\n`);

            for (var i = 0; i < names.length; i++) {
                containerArr.push(names[i].split(" "))
            }

            for (var j = 0; j < containerArr.length; j++) {
                thicknessArr.push(containerArr[j][0]);
                containerArr[j].splice(0, 1);
                nameArr.push(containerArr[j][0]);
            }

            for (var b = 0; b < nameArr.length; b++) {
                db.Prices.create({
                    Thickness: thicknessArr[b],
                    Pattern: nameArr[b]
                }).then(mongObj => mongObj)
                    .catch(err => console.log(err));
            }
        });
        fs.readFile("./definitions/1to5.txt", "utf8", (err, data) => {

            let prices = data.split("\r\n");

            db.Prices.find().lean().then(results => {
                for (var u = 0; u < prices.length; u++) {
                    db.Prices
                        .updateMany({ _id: results[u]._id }, { $set: { oneToFive: prices[u] } })
                        .then(obj => obj)
                        .catch(err => console.log(err));
                }
            }).catch(err => console.log(err));

        });
        fs.readFile("./definitions/6to10.txt", "utf8", (err, data) => {

            let prices = data.split("\r\n");

            db.Prices.find().lean().then(results => {
                for (var u = 0; u < prices.length; u++) {
                    db.Prices
                        .updateMany(
                            { _id: results[u]._id },
                            { $set: { sixToTen: prices[u] } })
                        .then(obj => obj)
                        .catch(err => console.log(err));
                }
            }).catch(err => console.log(err));

        });
        fs.readFile("./definitions/11to25.txt", "utf8", (err, data) => {

            let prices = data.split("\r\n");

            db.Prices.find().lean().then(results => {
                for (var u = 0; u < prices.length; u++) {
                    db.Prices
                        .updateMany({ _id: results[u]._id }, { $set: { elevenToTwentyFive: prices[u] } })
                        .then(obj => obj)
                        .catch(err => console.log(err));
                }
            }).catch(err => console.log(err));

        });
        fs.readFile("./definitions/26to50.txt", "utf8", (err, data) => {

            let prices = data.split("\r\n");

            db.Prices.find().lean().then(results => {
                for (var u = 0; u < prices.length; u++) {
                    db.Prices
                        .updateMany({ _id: results[u]._id }, { $set: { twentySixToFifty: prices[u] } })
                        .then(obj => obj)
                        .catch(err => console.log(err));
                }
            }).catch(err => console.log(err));

        });
        fs.readFile("./definitions/51to100.txt", "utf8", (err, data) => {

            let prices = data.split("\r\n");

            db.Prices.find().lean().then(results => {
                for (var u = 0; u < prices.length; u++) {
                    db.Prices
                        .updateMany({ _id: results[u]._id }, { $set: { fiftyOneToOneHundred: prices[u] } })
                        .then(obj => obj)
                        .catch(err => console.log(err));
                }
            }).catch(err => console.log(err));

        });
        fs.readFile("./definitions/101to205.txt", "utf8", (err, data) => {

            let prices = data.split("\r\n");

            db.Prices.find().lean().then(results => {
                for (var u = 0; u < prices.length; u++) {
                    db.Prices
                        .updateMany({ _id: results[u]._id }, { $set: { oneHundredOneToTwoHundredFive: prices[u] } })
                        .then(obj => console.log(obj))
                        .catch(err => console.log(err));
                }
            }).catch(err => console.log(err));

        });
        fs.readFile("./definitions/251to500.txt", "utf8", (err, data) => {

            let prices = data.split("\r\n");

            db.Prices.find().lean().then(results => {
                console.log(results)
                for (var u = 0; u < prices.length; u++) {
                    db.Prices
                        .updateMany({ _id: results[u]._id }, { $set: { twoHundredFiftyOneToFiveHundred: prices[u] } })
                        .then(obj => console.log(obj))
                        .catch(err => console.log(err));
                }
            }).catch(err => console.log(err));
        });
    },
    Calculate: (pattern, thickness, quantity, width, length, tapeWrap) => {
        return db.Prices
            .findOne(
                {
                    Pattern: pattern,
                    Thickness: thickness
                })
            .lean()
            .then(data => {

                let sqInch = (width * length);
                let sqFt = sqInch / 144;

                console.log(sqInch);
                console.log(sqFt);

                if (quantity <= 5) {
                    quantity = data.oneToFive
                } else if (quantity >= 6 && quantity <= 10) {
                    quantity = data.sixToTen;
                } else if (quantity >= 11 && quantity <= 25) {
                    quantity = data.elevenToTwentyFive
                } else if (quantity >= 26 && quantity <= 50) {
                    quantity = data.twentySixToFifty;
                } else if (quantity >= 51 && quantity <= 100) {
                    quantity = data.fiftyOneToOneHundred;
                } else if (quantity >= 101 && quantity <= 205) {
                    quantity = data.oneHundredOneToTwoHundredFive;
                } else if (quantity >= 251 && quantity <= 500) {
                    quantity = data.max;
                };

                let cost;

                if (tapeWrap) {
                    cost = ((((parseInt(quantity) + 0.25) * sqFt) * 1.02) * 1.12).toString()
                } else {
                    cost = (quantity * sqFt).toString();
                }

                console.log(cost)

                return cost
            }).catch(err => console.log(err));
    }
};