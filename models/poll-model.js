var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
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
    }
});

var Poll = mongoose.model('Polls', PollSchema);
module.exports = Poll;
module.exports.get = function (callback, limit) {
    Poll.find(callback).limit(limit);
}