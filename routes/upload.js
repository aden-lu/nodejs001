var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    // res.render('index', {title: 'Express'});
    var path = require('path');
    var fs = require("fs");
    fs.readFile(req.files.image.path, function (err, data) {
        var dirname = path.resolve(".") + "/uploads/";
        var newPath = dirname + req.files.image.originalFileName;
        fs.writeFile(newPath, data, function (err) {
            if (err) {
                res.json("Failed to upload you file!");
            } else {
                res.json("Successfully uploaded you file!");
            }
        });
    });
});

module.exports = upload;