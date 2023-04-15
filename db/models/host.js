const mongoose = require('mongoose')

const host = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    hostName: {type: String, required: true},
    country: {type: String},
    hostCity: {type: String, required: true},

    infos: {
        room: {type: Number},
        from: {type: String},
        to: {type: String},
        price: {type: String},
    },
    images: [{type: String}],
    requests: [
        {
            by: {type: String},
            from: {type: String},
            to: {type: String},
            rooms: {type: String},
            days: {type: String},
            totalPrice: {type: String}
        }
    ],

    notification: [
        {
            by: {type: String},
            from: {type: String},
            to: {type: String},
            rooms: {type: String},
            status: {type: Boolean}
        }
    ]
})


const Host = mongoose.model('Host', host)
module.exports = Host