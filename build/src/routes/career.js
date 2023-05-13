"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const carrer_1 = require("../controllers/carrer");
const checkForErrors_1 = require("../middlewares/checkForErrors");
exports.router = (0, express_1.Router)();
exports.router.get('/', carrer_1.getAllCareers);
exports.router.post('/', [
    (0, express_validator_1.body)('name', 'name is required').notEmpty(),
    (0, express_validator_1.body)('name', 'name should be a string').isString(),
    checkForErrors_1.checkForErrors
], carrer_1.insertCareer);
exports.router.put('/:id', [(0, express_validator_1.param)('id', 'Not a valid MongoId').isMongoId(), checkForErrors_1.checkForErrors], carrer_1.updateCareer);
exports.router.delete('/:id', [(0, express_validator_1.param)('id', 'Invalid Mongo id').isMongoId(), checkForErrors_1.checkForErrors], carrer_1.deleteCareer);
