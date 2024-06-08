"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTwoRandomActors = exports.twoRandomNumbersBetweenOneAndTwentyFive = void 0;
const randomActor_1 = __importDefault(require("./randomActor"));
const getActorDetails_1 = __importDefault(require("./getActorDetails"));
function twoRandomNumbersBetweenOneAndTwentyFive() {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
    while (num1 === num2) {
        num2 = Math.floor(Math.random() * 25) + 1;
    }
    return [num1, num2];
}
exports.twoRandomNumbersBetweenOneAndTwentyFive = twoRandomNumbersBetweenOneAndTwentyFive;
async function getTwoRandomActors() {
    console.log('⚙️ fetching two random actors...');
    const [randomNumberBetweenOneAndTwentyFive, randomNumberBetweenOneAndTwentyFive2,] = twoRandomNumbersBetweenOneAndTwentyFive();
    try {
        const actorPromises = [
            (0, randomActor_1.default)(randomNumberBetweenOneAndTwentyFive),
            (0, randomActor_1.default)(randomNumberBetweenOneAndTwentyFive2),
        ];
        const actors = await Promise.all(actorPromises).then((actors) => {
            const actor1 = actors[0];
            const actor2 = actors[1];
            return Promise.all([
                (0, getActorDetails_1.default)(actor1.id),
                (0, getActorDetails_1.default)(actor2.id),
            ]).then(([actor1Birthday, actor2Birthday]) => {
                actor1.birthday = actor1Birthday;
                actor2.birthday = actor2Birthday;
                return [actor1, actor2];
            });
        });
        console.log('⚙️ Successfully fetched two random actors:', actors);
        return actors; // This will be an array of two actors
    }
    catch (err) {
        console.error(err);
        throw err;
    }
}
exports.getTwoRandomActors = getTwoRandomActors;
