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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = require("./routes/index");
const cors_2 = __importDefault(require("./config/cors"));
require('dotenv').config();
const globalRoutes = {
    career: '/api/career',
    geographical: '/api/geographical'
};
const app = (0, express_1.default)();
exports.app = app;
const mongoose = require('./config/db.config').connection(app.get('env'));
// Middlewares
app.use((0, cors_1.default)(cors_2.default));
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
if (app.get('env') === 'development') {
    app.use((0, morgan_1.default)('dev'));
}
// ROUTES
app.use(globalRoutes.career, index_1.CarreerRouter);
app.use(globalRoutes.geographical, index_1.GeographicalRouter);
const server = http_1.default.createServer(app);
exports.server = server;
// Server events handlers
server.on('listening', () => {
    console.log('Server info: ');
    console.log(JSON.stringify(server.address()));
});
server.on('error', (error) => {
    if (error) {
        console.log('Server Error');
        console.log(error);
    }
});
server.on('close', (error) => __awaiter(void 0, void 0, void 0, function* () {
    if (error) {
        console.log('Server Error');
        console.log(error);
        process.exit(0);
    }
    console.log('Server down succsessfully');
    yield mongoose.connection.close(false);
    process.exit(0);
}));
