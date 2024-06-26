"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const user_model_1 = require("../models/user.model");
const validateUser = (userid, password, phoneNumber) => {
    return user_model_1.users.find(user => user.userid === userid && user.password === password && user.phoneNumber === phoneNumber);
};
exports.validateUser = validateUser;
