'use strict'
const Poll = require('../models/poll-model');
const Group = require('../models/group-model');
const Historic = require('../models/historic-model');
const utils = require('../shared/utils');

exports.savePoll = function (req, res) {
    var poll = new Poll();

    poll.pollName = req.body.pollName || null;
    poll.groupPoll = req.body.groupPoll || null;
    poll.questions = req.body.questions || null;
    poll.owner = req.body.owner || null;
    poll.answers = null;
    poll.openDate = new Date();

    poll.save(function (err) {
        if (err)
            utils.errorController(res, 500, err);
        else
            res.status(200).send({
                message: 'Poll register successfuly',
                data: poll
            });
    })
};

exports.getPolls = function (req, res) {
    const params = { repondents: req.query.user };
    Group.find(params, function (err, response) {
        if (err) {
            utils.errorController(res, 500, err);
        } else if (!response) {
            utils.errorController(res, 401, "Not exist");
        } else {
            let pollsArray = [];
            response.forEach((element, index) => {
                pollsArray[index] = Poll.find({ groupPoll: element.groupName });
            })
            const promise = Promise.all(pollsArray);
            promise.then((resp) => {
                let data = [];
                resp.forEach((element) => {
                    if (element.length > 0) {
                        element.forEach((item) => {
                            data.push(item);
                        })
                    }
                })
                res.status(200).send({
                    message: 'Polls search successfuly',
                    data: data
                });
            })
        }
    });
}

exports.getPoll = function (req, res) {
    Poll.findById(req.url.split('/')[req.url.split('/').length - 1])
        .exec(function (err, response) {
            if (err) {
                utils.errorController(res, 500, err);
            } else if (!response) {
                utils.errorController(res, 401, "Not exist");
            } else {
                res.json({
                    message: `Polls of ${req.query.owner}`,
                    data: response
                });
            }
        });
}

exports.updatePolls = function (req, res) {
    Poll.findById(req.body.params._id, function (err, poll) {
        if (err)
            utils.errorController(res, 500, err);
        poll.pollName = req.body.params.pollName || null;
        poll.groupPoll = req.body.params.groupPoll || null;
        poll.questions = req.body.params.questions || null;
        if (req.body.params.answers) {
            if (poll.answers) {
                poll.answers.forEach((item, index) => {
                    if (item.user = req.body.params.answers.user) {
                        position = index;
                    }
                })
                if (position) {
                    poll.answers[position] = req.body.params.answers;
                } else {
                    poll.answers.push(req.body.params.answers);
                }
            } else {
                poll.answers = req.body.params.answers || null;
            }
        }
        poll.save(function (err) {
            if (err)
                utils.errorController(res, 500, err);
            res.json({
                message: 'Contact Info updated',
                data: poll
            });
        });
    });
}

exports.deletePoll = function (req, res) {
    Poll.findById(req.query._id, function (err, poll) {
        var historic = new Historic();

        historic.pollName = poll.pollName || null;
        historic.groupPoll = poll.groupPoll || null;
        historic.questions = poll.questions || null;
        historic.owner = poll.owner || null;
        historic.answers = poll.answers || null;
        historic.openDate = poll.openDate || null;
        historic.closeDate = new Date();

        historic.save(function (err) {
            if (err)
                utils.errorController(res, 500, err);
            Poll.findByIdAndDelete({
                _id: req.query._id
            }, function (err) {
                if (err)
                    res.send(err);
                res.json({
                    status: "success",
                    message: 'Poll deleted'
                });
            });
        });
    })
}
