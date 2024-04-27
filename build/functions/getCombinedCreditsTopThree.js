"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // loads the .env file into process.env
const bearerKey = process.env.BEARER_TOKEN;
async function getCombinedCreditsTopThree(actorId) {
    const actorEndpoint = `https://api.themoviedb.org/3/person/${actorId}/combined_credits`;
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
        console.log('⚙️ Successfully fetched combined credits:');
        const castSortedByVoteCount = data.cast.sort((a, b) => b.vote_count - a.vote_count);
        const topThree = castSortedByVoteCount.slice(0, 3);
        return topThree;
    }
    catch (error) {
        console.error(error);
        throw new Error('getCombinedCreditsTopThree(): Internal server error');
    }
}
exports.default = getCombinedCreditsTopThree;
