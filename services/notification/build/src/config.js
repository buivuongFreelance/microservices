"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({});
if (process.env.ENABLE_APM === "1") {
    require("elastic-apm-node").start({
        serviceName: "micro-notification",
        serverUrl: process.env.ELASTIC_APM_SERVER_URL,
        secretToken: process.env.ELASTIC_APM_SECRET_TOKEN,
        environment: process.env.NODE_ENV,
        active: true,
        captureBody: "all",
        errorOnAbortedRequests: true,
        captureErrorLogStackTraces: "always",
    });
}
class Config {
    constructor() {
        this.NODE_ENV = process.env.NODE_ENV || "";
        this.CLIENT_URL = process.env.CLIENT_URL || "";
        this.SENDER_EMAIL = process.env.SENDER_EMAIL || "";
        this.SENDER_EMAIL_PASSWORD = process.env.SENDER_EMAIL_PASSWORD || "";
        this.RABBITMQ_ENDPOINT = process.env.RABBITMQ_ENDPOINT || "";
        this.ELASTIC_SEARCH_URL = process.env.ELASTIC_SEARCH_URL || "";
    }
}
exports.config = new Config();
//# sourceMappingURL=config.js.map