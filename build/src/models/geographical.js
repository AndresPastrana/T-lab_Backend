"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityModel = exports.StateModel = exports.CountryModel = void 0;
const mongoose_1 = require("mongoose");
// const ExampleSchema = new Schema<DocType,Model,InstaceMethods>({
// });
// Countries
const CountrySchema = new mongoose_1.Schema({
    name: {
        type: "String",
        required: true,
        unique: true,
    },
});
// Mthdos of the schema's instance
CountrySchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v } = _a, rest = __rest(_a, ["__v"]);
    return rest;
};
const CountryModel = (0, mongoose_1.model)("Country", CountrySchema);
exports.CountryModel = CountryModel;
// States
const StateSchema = new mongoose_1.Schema({
    id_country: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        unique: true,
        ref: "Country",
    },
});
const CitySchema = new mongoose_1.Schema({
    id_state: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        unique: true,
        ref: "State",
    },
});
const StateModel = (0, mongoose_1.model)("State", StateSchema);
exports.StateModel = StateModel;
const CityModel = (0, mongoose_1.model)("City", CitySchema);
exports.CityModel = CityModel;
