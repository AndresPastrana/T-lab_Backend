"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const checkForErrors = (req, resp, next) => {
    const errors = (0, express_validator_1.validationResult)(req).array();
    if (errors.length > 0) {
        return resp.status(400).json({
            ok: true,
            errors,
            data: null,
        });
    }
    return next();
};
module.exports = { checkForErrors };
