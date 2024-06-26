"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginService = exports.generateRefreshToken = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = __importDefault(require("../config/env"));
const validation_1 = require("./validation");
const generateAccessToken = (user) => {
    return jsonwebtoken_1.default.sign({ userId: user.userid, roles: user.roles }, env_1.default.jwtAccessTokenSecret, { expiresIn: '15m' });
};
exports.generateAccessToken = generateAccessToken;
const generateRefreshToken = (user) => {
    return jsonwebtoken_1.default.sign({ userId: user.userid }, env_1.default.jwtRefreshTokenSecret, { expiresIn: '7d' });
};
exports.generateRefreshToken = generateRefreshToken;
const loginService = (userid, password, phoneNumber) => {
    const user = (0, validation_1.validateUser)(userid, password, phoneNumber);
    if (!user)
        throw new Error('Invalid credentials');
    const accessToken = (0, exports.generateAccessToken)(user);
    const refreshToken = (0, exports.generateRefreshToken)(user);
    return { accessToken, refreshToken };
};
exports.loginService = loginService;
