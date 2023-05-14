"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
exports.router = (0, express_1.Router)();
// TODO: Only an admin access this routes
exports.router.get("/countries", [], controllers_1.GeographicalController.getCountries);
exports.router.post("/countries", [], (_req, resp) => {
    resp.json({ ok: true });
});
exports.router.put("/countries", [], (_req, resp) => {
    resp.json({ ok: true });
});
exports.router.delete("/countries", []),
    (_req, resp) => {
        resp.json({ ok: true });
    };
// States
exports.router.get("/states", [], (_req, resp) => {
    resp.json({ ok: true });
});
exports.router.post("/states", [], (_req, resp) => {
    resp.json({ ok: true });
});
exports.router.put("/states", [], (_req, resp) => {
    resp.json({ ok: true });
});
exports.router.delete("/states", [], (_req, resp) => {
    resp.json({ ok: true });
});
exports.router.get("/cities", [], (_req, resp) => {
    resp.json({ ok: true });
});
exports.router.post("/cities", [], (_req, resp) => {
    resp.json({ ok: true });
});
exports.router.put("/cities", [], (_req, resp) => {
    resp.json({ ok: true });
});
exports.router.delete("/cities", [], (_req, resp) => {
    resp.json({ ok: true });
});
