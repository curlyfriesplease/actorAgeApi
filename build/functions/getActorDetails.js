"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // loads the .env file into process.env
const bearerKey = process.env.BEARER_TOKEN;
async function getActorDetails(actorId) {
    const actorEndpoint = `https://api.themoviedb.org/3/person/${actorId}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${bearerKey}`,
        },
    };
    try {
        const response = await fetch(actorEndpoint, options);
        const data = await response.json();
        console.log('⚙️ Successfully fetched actor:' + data.name + ' ' + data.birthday);
        return data;
    }
    catch (error) {
        console.error(error);
        throw new Error('getACtorDetails(): Internal server error');
    }
}
exports.default = getActorDetails;
