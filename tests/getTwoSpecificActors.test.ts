import getTwoSpecificActors from '../functions/getTwoSpecificActors';

describe('getTwoSpecificActors', () => {
  it('fetches Tom Hanks and Brendan Gleeson specifically, checks they have birthdays and >2 credits', async () => {
    const testActors = await getTwoSpecificActors(31, 2039);
    expect(testActors).toHaveLength(2);

    expect(testActors[0].name).toEqual('Tom Hanks');
    expect(testActors[0]).toHaveProperty('birthday');
    expect(testActors[0]).toHaveProperty('known_for');
    expect(testActors[0].birthday).toEqual('1956-07-09');
    expect(testActors[0].known_for).toHaveLength(3);

    expect(testActors[1].name).toEqual('Brendan Gleeson');
    expect(testActors[1]).toHaveProperty('birthday');
    expect(testActors[1]).toHaveProperty('known_for');
    expect(testActors[1].birthday).toEqual('1955-03-29');
    expect(testActors[1].known_for).toHaveLength(3);
  });
});
