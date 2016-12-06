var models = require("../connections/models");
var userDao = require("../connections/dao/userDao");

/*
 describe("User", function () {
 before(function () {
 return models.sequelize.sync({force: true});
 });
 beforeEach(function () {
 models.User.destroy({where: {uGuid: {$ne: " "}}});
 });

 describe("create",function () {
 var u={userName:"aben"};
 userDao.create(u).then(function (data) {

 }):
 });

 })*/
models.User.destroy({where: {userName: {$ne: " "}}});
;

var u = {userName: "aben"};
userDao.create(u, function (err, data) {
    u = data;
    console.log(data.id);

    models.User.findAll({where: {uGuid: {$eq: u.uGuid}}}).then(function (data) {
        console.log("--------------------------------------");
        console.log(data[0].userName);
    });

});


