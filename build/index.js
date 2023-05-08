"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./src/server");
server_1.server.listen(process.env.PORT || 2344);
