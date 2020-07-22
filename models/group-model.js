var mongoose = require('mongoose');

var GroupSchema = new mongoose.Schema({
    groupName: {
        type: String,
        unique: true,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    repondents: {
        type: Array,
        required: true,
        trim: true
    }
});

var Group = mongoose.model('groups', GroupSchema);
module.exports = Group;
module.exports.get = function (callback, limit) {
    Group.find(callback).limit(limit);
}