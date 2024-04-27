import dotenv from 'dotenv';

dotenv.config(); // loads the .env file into process.env

const bearerKey = process.env.BEARER_TOKEN;

export default async function getCombinedCreditsTopThree(actorId: number) {
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
    const castSortedByVoteCount = data.cast.sort(
      (a: any, b: any) => b.vote_count - a.vote_count
    );
    const topThree = castSortedByVoteCount.slice(0, 3);
    return topThree;
  } catch (error) {
    console.error(error);
    throw new Error('getCombinedCreditsTopThree(): Internal server error');
  }
}
