require('dotenv').config();

const bearerKey = process.env.BEARER_TOKEN;

export default async function randomActorRequest(pageNo: number) {
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
    const oneRandomActor =
      data.results[Math.floor(Math.random() * data.results.length)];
    console.log('⚙️ Successfully fetched one random actor');
    console.log('⚙️ oneRandomActor:', oneRandomActor);
    return oneRandomActor;
  } catch (error) {
    console.error(error);
    throw new Error('randomActorRequest(): Internal server error');
  }
}
