'use strict'
const User = require('../models/user-model');
const cryptService = require('../services/crypt-service');
const jwtService = require('../services/jwt-service');
const utils = require('../shared/utils');

exports.login = function (req, res) {
    var loginStatus = false;
    User.findOne({ email: req.body.email })
        .exec(function (err, response) {
            if (err) {
                utils.errorController(res, 500, err);
            } else if (!response) {
                utils.errorController(res, 401, "Not exist");
            } else {
                cryptService.comparePassword(req.body.password, response.password, function (err, result) {
                    if (err)
                        utils.errorController(res, 401, 'Wrong auth');
                    else
                        loginStatus = result;

                    console.log(response);
                    console.log(jwtService.createToken(response));
                    res.json({
                        message: `User login ${loginStatus ? 'successfully' : 'fails'}`,
                        data: loginStatus ? jwtService.createToken(response) : false
                    });
                })
            } { }
        });
}