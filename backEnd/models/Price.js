var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const PriceSchema = new Schema(
    {
        Amount: {
            type: String,
            required: true
        },
        Price:{
            type: String,
            required: true
        }
    }, { versionKey: false }
);

var Price = mongoose.model("Price", PriceSchema);

module.exports = Price;