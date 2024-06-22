"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const user_model_1 = require("../models/user.model");
const validateUser = (username, password) => {
    return user_model_1.users.find(user => user.username === username && user.password === password);
};
exports.validateUser = validateUser;
