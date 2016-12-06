"use strict";

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4},
        uGuid: {type: DataTypes.UUID},
        userName: {type: DataTypes.STRING}
    });
    return User.schema("alu");
};