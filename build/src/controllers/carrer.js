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
exports.updateCareer = exports.deleteCareer = exports.insertCareer = exports.getAllCareers = void 0;
const career_1 = require("../models/career");
// TODO: Fix this unused param
const getAllCareers = (_, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // A list of Carrers Documents
        const carrers = yield career_1.CarrerModel.find();
        resp.json({
            ok: true,
            data: carrers
        });
        return;
    }
    catch (error) {
        resp.json({ error });
    }
});
exports.getAllCareers = getAllCareers;
const insertCareer = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const newCarrer = new career_1.CarrerModel(body);
        yield newCarrer.save();
        resp.status(201).json({ ok: true, data: newCarrer });
    }
    catch (error) {
        console.log(error);
        resp.status(500).json({ ok: false });
    }
    // try {
    //   const inserted = CarrerModel.insertOne(body);
    //   console.log(inserted);
    // } catch (error) {}
});
exports.insertCareer = insertCareer;
const deleteCareer = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: _id } = req.params;
        const deletedElement = yield career_1.CarrerModel.findByIdAndDelete(_id);
        resp.json({ ok: true, data: deletedElement });
    }
    catch (error) {
        resp.status(500).json({ ok: false, data: null, error });
    }
});
exports.deleteCareer = deleteCareer;
const updateCareer = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body, params } = req;
        const { id: _id } = params;
        yield career_1.CarrerModel.updateOne({ _id }, body);
        resp.status(201).json({ ok: true, data: Object.assign({ _id }, body) });
        return;
    }
    catch (error) {
        resp.status(500);
    }
});
exports.updateCareer = updateCareer;
