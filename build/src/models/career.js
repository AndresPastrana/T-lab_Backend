"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrerModel = void 0;
const mongoose_1 = require("mongoose");
const CareerSchema = new mongoose_1.Schema({
    name: {
        type: "String",
        required: true,
        unique: true,
    },
});
const CarrerModel = (0, mongoose_1.model)("career", CareerSchema);
exports.CarrerModel = CarrerModel;
