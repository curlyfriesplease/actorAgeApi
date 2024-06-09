import getActorDetails from '../functions/getActorDetails';

describe('getActorDetails', () => {
  it('Requests details of Julianne Moore, checks object contains key details', async () => {
    const actorDetails = await getActorDetails(1231);

    expect(actorDetails.id).toEqual(1231);
    expect(actorDetails.name).toEqual('Julianne Moore');
    expect(actorDetails.profile_path).toEqual(
      '/3YF19rWusxWfEI59ZM33dFhasRq.jpg'
    );
    expect(actorDetails.birthday).toEqual('1960-12-03');
    expect(actorDetails).toHaveProperty('deathday');
    expect(actorDetails.deathday).toBeNull;
  });
});
