"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../Login/controller");
const router = (0, express_1.Router)();
router.post('/login', controller_1.loginController);
exports.default = router;
