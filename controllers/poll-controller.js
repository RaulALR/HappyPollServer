'use strict'
const Poll = require('../models/poll-model');
const Group = require('../models/group-model');
const utils = require('../shared/utils');

exports.savePoll = function (req, res) {
    var poll = new Poll();

    poll.pollName = req.body.pollName || null;
    poll.groupPoll = req.body.groupPoll || null;
    poll.questions = req.body.questions || null;

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
    const params = { owner: req.query.user };
    Group.find(params, function (err, response) {
        if (err) {
            utils.errorController(res, 500, err);
        } else if (!response) {
            console.log('401')
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
                console.log('401')
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
}
