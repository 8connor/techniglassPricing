var fs = require("fs");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/pricingDb", { useNewUrlParser: true });

var db = require("../models");

module.exports = {
    compile: () => {
        const grabTheList = () => {
            console.log("made it to grab the list")
            fs.readFile("./definitions/Patterns.txt", 'utf8', function (err, data) {
                if (err) throw console.log(err);
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
                    db.Type.create({
                        thickness: thicknessArr[b],
                        pattern: nameArr[b]
                    }).then(mongObj => console.log(mongObj))
                        .catch(err => console.log(err));
                }
            })
        };


        const addPrice = () => {
            fs.readFile("./definitions/1to5-tape.txt", "utf8", (err, data) => {

                let prices = data.split("\r\n");
                console.log("hit")
                db.Type.find().lean().then(results => {
                    console.log(results)
                    for (var u = 0; u < prices.length; u++) {
                        db.Type
                            .updateMany(
                                { _id: results[u]._id },
                                {

                                    $push: {
                                        priceDef: {
                                            amount: "1-5",
                                            price: prices[u],
                                            tapeWrap: true
                                        }
                                    }
                                })
                            .then(obj => obj)
                            .catch(err => console.log(err));
                    }
                }).catch(err => console.log(err));

            })
            fs.readFile("./definitions/6to10-tape.txt", "utf8", (err, data) => {

                let prices = data.split("\r\n");
                db.Type.find().lean().then(results => {
                    console.log(results)
                    for (var u = 0; u < prices.length; u++) {
                        db.Type
                            .updateMany(
                                { _id: results[u]._id },
                                {
                                    $push: {
                                        priceDef: {
                                            amount: "6-10",
                                            price: prices[u],
                                            tapeWrap: true
                                        }
                                    }
                                })
                            .then(obj => obj)
                            .catch(err => console.log(err));
                    }
                }).catch(err => console.log(err));
            });
            fs.readFile("./definitions/11to25-tape.txt", "utf8", (err, data) => {

                let prices = data.split("\r\n");

                db.Type.find().lean().then(results => {
                    console.log(results)
                    for (var u = 0; u < prices.length; u++) {
                        db.Type
                            .updateMany(
                                { _id: results[u]._id },
                                {
                                    $push: {
                                        priceDef: {
                                            amount: "11-25",
                                            price: prices[u],
                                            tapeWrap: true
                                        }
                                    }
                                })
                            .then(obj => obj)
                            .catch(err => console.log(err));
                    }
                }).catch(err => console.log(err));

            });
            fs.readFile("./definitions/26to50-tape.txt", "utf8", (err, data) => {

                let prices = data.split("\r\n");

                db.Type.find().lean().then(results => {
                    console.log(results)
                    for (var u = 0; u < prices.length; u++) {
                        db.Type
                            .updateMany(
                                { _id: results[u]._id },
                                {
                                    $push: {
                                        priceDef: {
                                            amount: "26-50",
                                            price: prices[u],
                                            tapeWrap: true
                                        }
                                    }
                                })
                            .then(obj => obj)
                            .catch(err => console.log(err));
                    }
                }).catch(err => console.log(err));

            });
            fs.readFile("./definitions/51to100-tape.txt", "utf8", (err, data) => {

                let prices = data.split("\r\n");

                db.Type.find().lean().then(results => {
                    console.log(results)
                    for (var u = 0; u < prices.length; u++) {
                        db.Type
                            .updateMany(
                                { _id: results[u]._id },
                                {
                                    $push: {
                                        priceDef: {
                                            amount: "51-100",
                                            price: prices[u],
                                            tapeWrap: true
                                        }
                                    }
                                })
                            .then(obj => obj)
                            .catch(err => console.log(err));
                    }
                }).catch(err => console.log(err));

            });
            fs.readFile("./definitions/101to205-tape.txt", "utf8", (err, data) => {

                let prices = data.split("\r\n");

                db.Type.find().lean().then(results => {
                    console.log(results)
                    for (var u = 0; u < prices.length; u++) {
                        db.Type
                            .updateMany(
                                { _id: results[u]._id },
                                {
                                    $push: {
                                        priceDef: {
                                            amount: "101-205",
                                            price: prices[u],
                                            tapeWrap: true
                                        }
                                    }
                                })
                            .then(obj => obj)
                            .catch(err => console.log(err));
                    }
                }).catch(err => console.log(err));

            });
            fs.readFile("./definitions/251to500-tape.txt", "utf8", (err, data) => {

                let prices = data.split("\r\n");

                db.Type.find().lean().then(results => {
                    console.log(results)
                    for (var u = 0; u < prices.length; u++) {
                        db.Type
                            .updateMany(
                                { _id: results[u]._id },
                                {
                                    $push: {
                                        priceDef: {
                                            amount: "251-500",
                                            price: prices[u],
                                            tapeWrap: true
                                        }
                                    }
                                })
                            .then(obj => obj)
                            .catch(err => console.log(err));
                    }
                }).catch(err => console.log(err));
            });
            fs.readFile("./definitions/1to5.txt", "utf8", (err, data) => {

                let prices = data.split("\r\n");

                db.Type.find().lean().then(results => {
                    console.log(results)
                    for (var u = 0; u < prices.length; u++) {
                        db.Type
                            .updateMany(
                                { _id: results[u]._id },
                                {
                                    $push: {
                                        priceDef: {
                                            amount: "1-5",
                                            price: prices[u],
                                            tapeWrap: false
                                        }
                                    }
                                })
                            .then(obj => obj)
                            .catch(err => console.log(err));
                    }
                }).catch(err => console.log(err));

            });
            fs.readFile("./definitions/6to10.txt", "utf8", (err, data) => {

                let prices = data.split("\r\n");

                db.Type.find().lean().then(results => {
                    console.log(results)
                    for (var u = 0; u < prices.length; u++) {
                        db.Type
                            .updateMany(
                                { _id: results[u]._id },
                                {
                                    $push: {
                                        priceDef: {
                                            amount: "6-10",
                                            price: prices[u],
                                            tapeWrap: false
                                        }
                                    }
                                })
                            .then(obj => obj)
                            .catch(err => console.log(err));
                    }
                }).catch(err => console.log(err));

            });
            fs.readFile("./definitions/11to25.txt", "utf8", (err, data) => {

                let prices = data.split("\r\n");

                db.Type.find().lean().then(results => {
                    console.log(results)
                    for (var u = 0; u < prices.length; u++) {
                        db.Type
                            .updateMany(
                                { _id: results[u]._id },
                                {
                                    $push: {
                                        priceDef: {
                                            amount: "11-25",
                                            price: prices[u],
                                            tapeWrap: false
                                        }
                                    }
                                })
                            .then(obj => obj)
                            .catch(err => console.log(err));
                    }
                }).catch(err => console.log(err));

            });
            fs.readFile("./definitions/26to50.txt", "utf8", (err, data) => {

                let prices = data.split("\r\n");

                db.Type.find().lean().then(results => {
                    console.log(results)
                    for (var u = 0; u < prices.length; u++) {
                        db.Type
                            .updateMany(
                                { _id: results[u]._id },
                                {
                                    $push: {
                                        priceDef: {
                                            amount: "26-50",
                                            price: prices[u],
                                            tapeWrap: false
                                        }
                                    }
                                })
                            .then(obj => obj)
                            .catch(err => console.log(err));
                    }
                }).catch(err => console.log(err));

            });
            fs.readFile("./definitions/51to100.txt", "utf8", (err, data) => {

                let prices = data.split("\r\n");

                db.Type.find().lean().then(results => {
                    console.log(results)
                    for (var u = 0; u < prices.length; u++) {
                        db.Type
                            .updateMany(
                                { _id: results[u]._id },
                                {
                                    $push: {
                                        priceDef: {
                                            amount: "51-100",
                                            price: prices[u],
                                            tapeWrap: false
                                        }
                                    }
                                })
                            .then(obj => obj)
                            .catch(err => console.log(err));
                    }
                }).catch(err => console.log(err));

            });
            fs.readFile("./definitions/101to205.txt", "utf8", (err, data) => {

                let prices = data.split("\r\n");

                db.Type.find().lean().then(results => {
                    console.log(results)
                    for (var u = 0; u < prices.length; u++) {
                        db.Type
                            .updateMany(
                                { _id: results[u]._id },
                                {
                                    $push: {
                                        priceDef: {
                                            amount: "101-205",
                                            price: prices[u],
                                            tapeWrap: false
                                        }
                                    }
                                })
                            .then(obj => obj)
                            .catch(err => console.log(err));
                    }
                }).catch(err => console.log(err));

            });
            fs.readFile("./definitions/251to500.txt", "utf8", (err, data) => {

                let prices = data.split("\r\n");

                db.Type.find().lean().then(results => {
                    console.log(results)
                    for (var u = 0; u < prices.length; u++) {
                        db.Type
                            .updateMany(
                                { _id: results[u]._id },
                                {
                                    $push: {
                                        priceDef: {
                                            amount: "251-500",
                                            price: prices[u],
                                            tapeWrap: false
                                        }
                                    }
                                })
                            .then(obj => obj)
                            .catch(err => console.log(err));
                    }
                }).catch(err => console.log(err));
            });
        }

        // grabTheList();

        // addPrice();
    },
    Calculate: (pattern, thickness, quantity, width, length, tapeWrap) => {
        return db.Type
            .findOne(
                {
                    pattern: pattern,
                    thickness: thickness
                })
            .lean()
            .then(data => {
                console.log(data);

                let sqInch = (width * length);
                let sqFt = sqInch / 144;

                console.log(sqInch);
                console.log(sqFt);

                let cost;

                for (var i = 0;i < data.priceDef.length; i++) {
                    if (data.priceDef[i].amount === quantity && data.priceDef[i].tapeWrap === tapeWrap) {
                        quantity = data.priceDef[i].price
                    }else{
                        continue
                    }
                }

                cost = (quantity * sqFt);

                console.log(cost);

                return cost;
            }).catch(err => console.log(err));
    }
};