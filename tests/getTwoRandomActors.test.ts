import {
  twoRandomNumbersBetweenOneAndTwentyFive,
  getTwoRandomActors,
} from '../functions/getTwoRandomActors';

describe('getTwoRandomActors', () => {
  it('twoRandomNumbersBetweenOneAndTwentyFive() returns two distinct numbers, between 1 and 25, checked 200 times', () => {
    for (let i = 0; i < 200; i++) {
      const numbers: [number, number] =
        twoRandomNumbersBetweenOneAndTwentyFive();
      expect(numbers[0]).not.toEqual(numbers[1]);
      expect(numbers).toHaveLength(2);
      numbers.forEach((number) => {
        expect(number).toBeGreaterThanOrEqual(1);
        expect(number).toBeLessThanOrEqual(25);
      });
    }
  });

  it('returns an array of two actors, each with ID numbers and birthdays', async () => {
    const actors = await getTwoRandomActors();

    expect(actors).toHaveLength(2);
    actors.forEach((actor) => {
      expect(actor).toHaveProperty('id');
      expect(actor).toHaveProperty('birthday');
    });
  });
});
