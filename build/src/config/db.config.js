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
exports.connection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connection = (env) => __awaiter(void 0, void 0, void 0, function* () {
    let CDN = '';
    switch (env) {
        case 'development':
            CDN = process.env.CDN_DEV_DB;
            // DB events handlers
            mongoose_1.default.connection.once('open', () => {
                console.log(`DB :  Database online   (${env})`);
            });
            mongoose_1.default.connection.once('disconnected', () => {
                console.log(`\n DB :  Database offline   (${env})`);
            });
            mongoose_1.default.connection.on('error', () => {
                console.error('Error conecting to the database');
            });
            break;
        case 'test':
            CDN = process.env.CDN_TEST_DB;
            break;
        case 'production':
            CDN = process.env.CDN_PROD_DB;
            break;
        default:
            throw new Error(' You need to create a.env file in the root of ypur project and defined CDN_DEV_DB (development) || CDN_TEST_DB (test) || CDN_PROD_DB (production)');
    }
    // Initial conection
    yield mongoose_1.default.connect(CDN, {
        autoCreate: true,
        bufferCommands: true
    });
    return mongoose_1.default;
});
exports.connection = connection;
