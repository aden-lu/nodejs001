"use strict";

module.exports = function (sequelize, DataTypes) {
    var UserLoginHistory = sequelize.define("UserLoginHistory", {
        id: {type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4},
        uGuid: {type: DataTypes.UUID},
    });
    return UserLoginHistory.schema("alu");
};