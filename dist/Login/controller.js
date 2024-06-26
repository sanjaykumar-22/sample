"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const service_1 = require("./service");
const loginController = (req, res) => {
    try {
        const { userid, password, phoneNumber } = req.body;
        const tokens = (0, service_1.loginService)(userid, password, phoneNumber);
        res.json(tokens);
    }
    catch (error) {
        res.status(401).json({ message: 'Authentication failed' });
    }
};
exports.loginController = loginController;
