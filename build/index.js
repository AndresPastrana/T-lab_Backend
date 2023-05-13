"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./src/server");
server_1.server.listen((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 2344);
