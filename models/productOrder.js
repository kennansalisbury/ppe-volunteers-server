// dependencies
const MONGOOSE = require('mongoose');
// schema
const productOrderSchema = new MONGOOSE.Schema({
    producer: {
        type: MONGOOSE.Schema.Types.ObjectId,
        ref: 'User'
    },
    clinic: {
        type: MONGOOSE.Schema.Types.ObjectId,
        ref: 'Clinic'
    },
    collected: {
        type: Boolean,
        required: [true, 'collection status required']
    },
    delivered: {
        type: Boolean,
        required: [true, 'delivery status required']
    },
    products: [{
        product: {
            type: MONGOOSE.Schema.Types.ObjectId,
            ref: 'Product',
            required: [true, 'Product ordered is required']
        },
        quantity: {
            type: Number,
            required: [true, 'Product quantity is required']
        }
    }]
});

module.exports = MONGOOSE.model('ProductOrder', productOrderSchema);