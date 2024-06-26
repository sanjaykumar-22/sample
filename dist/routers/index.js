"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_router_1 = __importDefault(require("./login.router"));
const protected_1 = __importDefault(require("./protected"));
const router = (0, express_1.Router)();
router.use('/auth', login_router_1.default);
router.use('/protected', protected_1.default);
exports.default = router;
