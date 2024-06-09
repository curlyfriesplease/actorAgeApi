import dotenv from 'dotenv';
import getActorDetails from './getActorDetails';
import getCombinedCreditsTopThree from './getCombinedCreditsTopThree';

dotenv.config(); // loads the .env file into process.env
const bearerKey = process.env.BEARER_TOKEN;

export default async function getTwoSpecificActors(
  actor1: number,
  actor2: number
) {
  console.log('⚙️ fetching two specific actors...');

  try {
    const actorPromises = [
      Promise.all([
        getActorDetails(actor1),
        getCombinedCreditsTopThree(actor1),
      ]),
      Promise.all([
        getActorDetails(actor2),
        getCombinedCreditsTopThree(actor2),
      ]),
    ];
    const actors = await Promise.all(actorPromises);

    const actorsWithKnownFor = actors.map(([actorDetails, knownFor]) => ({
      ...actorDetails,
      known_for: knownFor,
    }));

    return actorsWithKnownFor; // This will be an array of two actors
  } catch (err) {
    console.error(err);
    throw err;
  }
}
