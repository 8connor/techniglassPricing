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
        Price: {
            type: String,
            required: false
        }
    }, { versionKey: false }
);

var Pricing = mongoose.model("Pricing", PricingSchema);

module.exports = Pricing;