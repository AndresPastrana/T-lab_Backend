"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
// *************** COUNTRY CONTROLLERS  ********************
const getCountries = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const countries = yield models_1.CountryModel.find({});
        res.json({ data: countries });
        return;
    }
    catch (error) { }
});
const getCountryById = (_req, res) => {
    return res.json();
};
const insertCountry = (_req, res) => {
    return res.json();
};
const updateCountry = (_req, res) => {
    return res.json();
};
const deleteCountry = (_req, res) => {
    return res.json();
};
// // *************** STATE CONTROLLERS  ********************
// const getStates = (_req: Request, res: Response) => {
//   return res.json();
// };
// const getStateById = (req: Request, res: Response) => {
//   return res.json();
// };
// const insertState = (req: Request, res: Response) => {
//   return res.json();
// };
// const updateState = (req: Request, res: Response) => {
//   return res.json();
// };
// // *************** CITY CONTROLLERS  ********************
// const getCities = (_req: Request, res: Response) => {
//   return res.json();
// };
// const getCityById = (req: Request, res: Response) => {
//   return res.json();
// };
// const insertCity = (req: Request, res: Response) => {
//   return res.json();
// };
// const updateCity = (req: Request, res: Response) => {
//   return res.json();
// };
const GeographicalController = Object.freeze({
    getCountries,
    getCountryById,
    insertCountry,
    updateCountry,
    deleteCountry,
    // getStates,
    // getStateById,
    // insertState,
    // updateState,
    // getCities,
    // getCityById,
    // insertCity,
    // updateCity,
});
exports.default = GeographicalController;
