'use strict'
const Group = require('../models/group-model');
const utils = require('../shared/utils');

exports.saveGroup = function (req, res) {
    var group = new Group();

    group.groupName = req.body.groupName;
    group.owner = req.body.owner;
    group.repondents = req.body.repondents;

    group.save(function (err) {
        if (err)
            utils.errorController(res, 500, err);
        else
            res.status(200).send({
                message: 'Group register successfuly',
                data: group
            });
    })
};

exports.getGroups = function (req, res) {
    const params = { owner: req.query.owner };
    Group.find(params, function (err, response) {
        if (err) {
            utils.errorController(res, 500, err);
        } else if (!response) {
            utils.errorController(res, 401, "Not exist");
        } else {
            res.json({
                message: `Groups of ${req.query.owner}`,
                data: response
            });
        }
    });
}

exports.getGroup = function (req, res) {
    Group.findById(req.url.split('/')[req.url.split('/').length - 1])
        .exec(function (err, response) {
            if (err) {
                utils.errorController(res, 500, err);
            } else if (!response) {
                utils.errorController(res, 401, "Not exist");
            } else {
                res.json({
                    message: `Groups of ${req.query.owner}`,
                    data: response
                });
            }
        });
}

exports.updateGroups = function (req, res) {
    Group.findById(req.body.params._id, function (err, group) {
        if (err)
            utils.errorController(res, 500, err);
        group.groupName = req.body.params.groupName || null;
        group.owner = req.body.params.owner || null;
        group.repondents = req.body.params.repondents || null;
        group.save(function (err) {
            if (err)
                utils.errorController(res, 500, err);
            res.json({
                message: 'Contact Info updated',
                data: group
            });
        });
    });
}

exports.deleteGroup = function (req, res) {
    Group.findByIdAndDelete({
        _id: req.query._id
    }, function (err) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Group deleted'
        });
    });
}
