const binaryLibrarian = require('../src');
jest.setTimeout(300000)

beforeEach(async (done) => {
  data = await binaryLibrarian.getFlashAssets();
  done()
});

describe('binaryLibrarian', () => {
  test('builds the dictionary', async () => {
    const flashData = JSON.parse(data);
    expect(flashData).toHaveProperty(['v5.7.0']);
  });
});
