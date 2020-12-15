var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const TypeSchema = new Schema(
    {
        thickness: {
            type: String,
            required: true
        },
        pattern: {
            type: String,
            required: true
        },
        ig: {
            type: Boolean,
            required: false
        },
        priceDef: [{
            amount: {
                type: String,
                required: true
            },
            price:{
                type: String,
                required: true
            },
            tapeWrap: {
                type: Boolean,
                required: true
            }
        }
        ]
    }, { versionKey: false }
);

var Type = mongoose.model("Type", TypeSchema);

module.exports = Type;