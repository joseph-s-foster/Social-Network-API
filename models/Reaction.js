const mongoose = require('mongoose');
const dateFormat = require('../utils/helpers');

const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
    },
    reactionBody: {
        type: String,
        maxLength: 280,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        get: TS => dateFormat(TS),
    },
    username: {
        type: String,
        required: true,
    },

    }, {
    toJSON: {
        getters: true,
    },
    id: false,
    _id: false,
});


module.exports = reactionSchema;
