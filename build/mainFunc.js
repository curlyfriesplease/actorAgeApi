"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lambdaHandler = void 0;
const lambdaHandler = async (event, context) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    let eventBody;
    if (event.body) {
        eventBody = JSON.parse(event.body);
    }
    else {
        eventBody = JSON.parse("NO EVENT BODY!!!");
    }
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: eventBody,
            statusCode: 200,
            input: event, // event is the input to the lambda function
        }),
    };
};
exports.lambdaHandler = lambdaHandler;
