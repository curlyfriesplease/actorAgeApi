"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const getActorDetails_1 = __importDefault(require("./getActorDetails"));
const getCombinedCreditsTopThree_1 = __importDefault(require("./getCombinedCreditsTopThree"));
dotenv_1.default.config(); // loads the .env file into process.env
const bearerKey = process.env.BEARER_TOKEN;
async function getTwoSpecificActors(actor1, actor2) {
    console.log('⚙️ fetching two specific actors...');
    try {
        const actorPromises = [
            Promise.all([
                (0, getActorDetails_1.default)(actor1),
                (0, getCombinedCreditsTopThree_1.default)(actor1),
            ]),
            Promise.all([
                (0, getActorDetails_1.default)(actor2),
                (0, getCombinedCreditsTopThree_1.default)(actor2),
            ]),
        ];
        const actors = await Promise.all(actorPromises);
        const actorsWithKnownFor = actors.map(([actorDetails, knownFor]) => ({
            ...actorDetails,
            known_for: knownFor,
        }));
        return actorsWithKnownFor; // This will be an array of two actors
    }
    catch (err) {
        console.error(err);
        throw err;
    }
}
exports.default = getTwoSpecificActors;
