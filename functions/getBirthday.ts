require('dotenv').config();

const bearerKey = process.env.BEARER_TOKEN;

export default async function getBirthday(actorId: number) {
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
    console.log('⚙️ Successfully fetched actor birthday:', data.birthday);
    return data.birthday;
  } catch (error) {
    console.error(error);
    throw new Error('getBirthday(): Internal server error');
  }
}
