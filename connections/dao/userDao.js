var models = require("../models");
var uuid = require("uuid");


module.exports.create = function (params, callback) {
    var u = {};
    var uid = uuid.v4();

    u.uGuid = uid;
    u.userName = params.userName
    models.User.create(u).then(function (data) {
        models.UserLoginHistory.create({uGuid: u.uGuid}).then(function (data) {
            return data;
        });
        callback(null, data);
    }).catch(function (err, result) {
        console.log(err);
        console.log(result);
    })
};