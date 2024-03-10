import dotenv from 'dotenv';

dotenv.config(); // loads the .env file into process.env
const bearerKey = process.env.BEARER_TOKEN;

async function getActorDetails(actorId: number) {
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
    console.log('⚙️ Successfully fetched actor details:', data.name);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('getActorDetails(): Internal server error');
  }
}

export default async function getTwoSpecificActors(
  actor1: number,
  actor2: number
) {
  console.log('⚙️ fetching two specific actors...');

  try {
    const actorPromises = [getActorDetails(actor1), getActorDetails(actor2)];
    const actors = await Promise.all(actorPromises);
    console.log('⚙️ Successfully fetched two specific actors:', actors);
    return actors; // This will be an array of two actors
  } catch (err) {
    console.error(err);
    throw err;
  }
}
