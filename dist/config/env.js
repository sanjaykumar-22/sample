"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const env = {
    jwtAccessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET || 'defaultAccessTokenSecret',
    jwtRefreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET || 'defaultRefreshTokenSecret',
};
exports.default = env;
