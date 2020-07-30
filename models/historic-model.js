var mongoose = require('mongoose');

var HistoricSchema = new mongoose.Schema({
    pollName: {
        type: String,
        unique: false,
        required: true,
    },
    groupPoll: {
        type: String,
        unique: false,
        required: true,
    },
    owner: {
        type: String,
        unique: false,
        required: true,
    },
    questions: {
        type: Array,
        unique: false,
        required: true
    },
    answers: new mongoose.Schema(({
        user: {
            type: String,
            unique: true,
            required: false
        },
        answersData: {
            type: Array,
            unique: false,
            required: false
        }
    })),
    openDate: {
        type: Date,
        unique: false,
        required: true
    },
    closeDate: {
        type: Date,
        unique: false,
        required: true
    }

});

var Historic = mongoose.model('Historic', HistoricSchema);
module.exports = Historic;
module.exports.get = function (callback, limit) {
    Historic.find(callback).limit(limit);
}