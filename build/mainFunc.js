"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lambdaHandler = void 0;
const getTwoRandomActors_1 = __importDefault(require("./functions/getTwoRandomActors"));
const getTwoSpecificActors_1 = __importDefault(require("./functions/getTwoSpecificActors"));
const lambdaHandler = async (event, context) => {
    console.log('⚙️ Received event:', JSON.stringify(event, null, 2));
    let returnBody;
    if (event.body) {
        const body = event.body;
        if (body.actor1 && body.actor2) {
            console.log('⚙️ two actor IDs specified, fetching specific actors...');
            returnBody = await (0, getTwoSpecificActors_1.default)(body.actor1, body.actor2);
        }
        else {
            console.log('⚙️ no actor IDs specified, fetching two random actors...');
            returnBody = await (0, getTwoRandomActors_1.default)();
        }
    }
    else {
        console.log('🚨 NO EVENT BODY');
        returnBody = JSON.parse('No event body received by the API');
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: returnBody,
                statusCode: 400,
                input: event,
            }),
        };
    }
    console.log('⚙️ Returning:', returnBody);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: returnBody,
            input: event,
        }),
    };
};
exports.lambdaHandler = lambdaHandler;
