"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkForErrors = void 0;
const express_validator_1 = require("express-validator");
const checkForErrors = (req, resp, next) => {
    const errors = (0, express_validator_1.validationResult)(req).array();
    if (errors.length > 0) {
        resp.status(400).json({
            ok: true,
            errors,
            data: null
        });
        return;
    }
    next();
};
exports.checkForErrors = checkForErrors;
