"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // loads the .env file into process.env
const bearerKey = process.env.BEARER_TOKEN;
async function randomActorRequest(pageNo) {
    const searchEndpoint = `https://api.themoviedb.org/3/person/popular?language=en-US&page=${pageNo}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${bearerKey}`,
        },
    };
    try {
        const response = await fetch(searchEndpoint, options);
        const data = await response.json();
        const oneRandomActor = data.results[Math.floor(Math.random() * data.results.length)];
        console.log('⚙️ Successfully fetched one random actor from searchEndpoint: ', searchEndpoint);
        console.log('⚙️ oneRandomActor:', oneRandomActor);
        return oneRandomActor;
    }
    catch (error) {
        console.error(error);
        throw new Error('randomActorRequest(): Internal server error');
    }
}
exports.default = randomActorRequest;
