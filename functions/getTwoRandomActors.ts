import randomActorRequest from './randomActor';
import getBirthday from './getBirthday';

function twoRandomNumbersBetweenOneAndTwentyFive() {
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;
  while (num1 === num2) {
    num2 = Math.floor(Math.random() * 25) + 1;
  }
  return [num1, num2];
}

export default async function getTwoRandomActors() {
  console.log('⚙️ fetching two random actors...');
  const [
    randomNumberBetweenOneAndTwentyFive,
    randomNumberBetweenOneAndTwentyFive2,
  ] = twoRandomNumbersBetweenOneAndTwentyFive();
  try {
    const actorPromises = [
      randomActorRequest(randomNumberBetweenOneAndTwentyFive),
      randomActorRequest(randomNumberBetweenOneAndTwentyFive2),
    ];
    const actors = await Promise.all(actorPromises).then((actors) => {
      const actor1 = actors[0];
      const actor2 = actors[1];
      return Promise.all([getBirthday(actor1.id), getBirthday(actor2.id)]).then(
        ([actor1Birthday, actor2Birthday]) => {
          actor1.birthday = actor1Birthday;
          actor2.birthday = actor2Birthday;
          return [actor1, actor2];
        }
      );
    });
    console.log('⚙️ Successfully fetched two random actors:', actors);
    return actors; // This will be an array of two actors
  } catch (err) {
    console.error(err);
    throw err;
  }
}
