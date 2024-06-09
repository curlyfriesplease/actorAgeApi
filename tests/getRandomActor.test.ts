import randomActorRequest from '../functions/getRandomActor';

describe('getRandomActor', () => {
  it('fetches a random actor from the first page, checks key details are present', async () => {
    const actorDetails = await randomActorRequest(1);

    expect(actorDetails).toHaveProperty('id');
    expect(typeof actorDetails.id).toBe('number');

    expect(actorDetails).toHaveProperty('name');
    expect(typeof actorDetails.name).toBe('string');
    expect(actorDetails.name).toMatch(/^[A-Za-z\s]+$/);

    expect(actorDetails).toHaveProperty('profile_path');
    expect(typeof actorDetails.profile_path).toBe('string');
    expect(actorDetails.profile_path).toMatch(/^\/.*\.jpg$/);
  });
});
