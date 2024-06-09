import getCombinedCreditsTopThree from '../functions/getCombinedCreditsTopThree';

describe('getCombinedCreditsTopThree', () => {
  it('fetches the combined credits of an actor, returns the top three', async () => {
    const actorId = 287;
    const topThree = await getCombinedCreditsTopThree(actorId);

    expect(topThree).toHaveLength(3);
    topThree.forEach((movie: any) => {
      expect(movie).toHaveProperty('original_title');
      expect(typeof movie.original_title).toBe('string');

      expect(movie).toHaveProperty('poster_path');
      expect(typeof movie.poster_path).toBe('string');
      expect(movie.poster_path).toMatch(/^\/.*\.jpg$/);
    });
  });
});
