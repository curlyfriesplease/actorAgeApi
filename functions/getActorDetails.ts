import dotenv from 'dotenv';

dotenv.config(); // loads the .env file into process.env

const bearerKey = process.env.BEARER_TOKEN;

export default async function getActorDetails(actorId: number) {
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
    console.log(
      '⚙️ Successfully fetched actor:' + data.name + ' ' + data.birthday
    );
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('getACtorDetails(): Internal server error');
  }
}
