var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const PricingSchema = new Schema(
    {
        Thickness: {
            type: String,
            required: true
        },
        Pattern: {
            type: String,
            required: true
        },
        IG: {
            type: Boolean,
            required: false
        },
        oneToFive: {
            type: String,
            required: false
        },
        sixToTen: {
            type: String,
            required: false
        },
        elevenToTwentyFive: {
            type: String,
            required: false
        },
        twentySixToFifty: {
            type: String,
            required: false
        },
        fiftyOneToOneHundred: {
            type: String,
            required: false
        },
        oneHundredOneToTwoHundredFive: {
            type: String,
            required: false
        },
        twoHundredFiftyOneToFiveHundred:{
            type: String,
            required: false
        }
    }, { versionKey: false }
);

var Pricing = mongoose.model("Pricing", PricingSchema);

module.exports = Pricing;