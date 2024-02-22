"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_token_1 = __importDefault(require("./validate-token"));
const equivalencias_1 = require("../controlers/equivalencias");
const router = (0, express_1.Router)();
router.get('/comp_ti', validate_token_1.default, equivalencias_1.comp_ti);
router.get('/comp_tde', validate_token_1.default, equivalencias_1.comp_ti);
exports.default = router;
