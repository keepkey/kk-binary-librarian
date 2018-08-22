const binaryLibrarian = require('../src');
jest.setTimeout(300000)

beforeAll(async (done) => {
  const data = await binaryLibrarian.getFlashAssets();
  flashData = JSON.parse(data);
  done()
});

describe('binaryLibrarian', () => {
  test('version 5.7.0', () => {
    expect(flashData).toHaveProperty(['v5.7.0',
      'firmware.keepkey.bin',
      'hash'],
      '8a81ad46c8bb3b38de9ff52cccf13bc32489396ddea5009589dbed86a18a903d'
    );
  });

  test('blupdater version 1.1.0', () => {
    expect(flashData).toHaveProperty(['bl_v1.1.0',
      'blupdater.bin',
      'hash'],
      'd3c7ff3a5ede0ced017b5ba989de1b0155209f7f2222fbc539c155b6352a622b'
    );
  });

  test('version 5.6.1', () => {
    expect(flashData).toHaveProperty(['v5.6.1',
      'firmware.keepkey.bin',
      'hash'],
      'e93d57bc3bb2eac51415b736bc1b73eaa2b7e428db03c262dcda6e983ad74d37'
    );
  });

  test('version 5.5.0', () => {
    expect(flashData).toHaveProperty(['v5.5.0',
      'firmware.keepkey.bin',
      'hash'],
      '7154be97587ede3612fbacb755b7cf768e2ce4665de1e54ab379a060bb37413a'
    );

    expect(flashData).toHaveProperty(['v5.5.0',
      'firmware.salt.bin',
      'hash'],
      '428557b7b83a38fa4e909a7f3b913a5c9248995cf18ce9f2b26d4d7fdc2fa56d'
    );
  });

  test('version 5.4.1', () => {
    expect(flashData).toHaveProperty(['v5.4.1',
      'firmware.salt.bin',
      'hash'],
      'bb83c67af93b44291131987c6d44adf7cd33483c68833e55ccde047b16b94e53'
    );

    expect(flashData).toHaveProperty(['v5.4.1',
      'firmware.keepkey.bin',
      'hash'],
      '43d156846cccba0c44196cf5a9f623fc97f45021a2af0105931792abb459837a'
    );
  });

  test('version 5.3.0', () => {
    expect(flashData).toHaveProperty(['v5.3.0',
      'salt_main.bin',
      'hash'],
      '380f5f63229f43ed7c68609b94331a50c1b7bdc1c7953127698659a0dfa0bd35'
    );

    expect(flashData).toHaveProperty(['v5.3.0',
      'keepkey_main.bin',
      'hash'],
      'd760ac7bf5bab73eaa0294027fca510e505ae197a153482d417a8674c834b226'
    );
  });

  test('version 5.1.2', () => {
    expect(flashData).toHaveProperty(['v5.1.2',
      'salt_main.bin',
      'hash'],
      '548bb10d32014aac05c906dd05e1a46685dabae6bfda6c942061a828d69e4ac7'
    );

    expect(flashData).toHaveProperty(['v5.1.2',
      'keepkey_main.bin',
      'hash'],
      'f4fde7571a8cb537b45ebb7a61e7851bae7d83f179a7a97dad6a9d7bd037dfff'
    );
  });

  test('version 5.1.1', () => {
    expect(flashData).toHaveProperty(['v5.1.1',
      'salt_main.bin',
      'hash'],
      '42187c9d1a9f86293274ec3f235adf599e05d10c569f69c282a3abbe2cea0525'
    );

    expect(flashData).toHaveProperty(['v5.1.1',
      'keepkey_main.bin',
      'hash'],
      'c76200bfca10bc38b165c0d503b427de5c89aecf47fa9511c001bccfd16b1100'
    );
  });

  test('version 5.1.0', () => {
    expect(flashData).toHaveProperty(['v5.1.0',
      'salt_main.bin',
      'hash'],
      '03b4c4986932e09ba94389c09ad41a1f88888287eb40b5b830b9a2eab047b1bf'
    );

    expect(flashData).toHaveProperty(['v5.1.0',
      'keepkey_main.bin',
      'hash'],
      'e80557c9f4c24381957b6e32aa43df3800252f82119572cce055e238e8a5be0e'
    );
  });

  test('version 5.0.1', () => {
    expect(flashData).toHaveProperty(['v5.0.1',
      'keepkey_main.bin',
      'hash'],
      '299fdc1a5611302263bdfa91eeccc09f7f89cf98fb8f9e39af483f669e139de2'
    );

    expect(flashData).toHaveProperty(['v5.0.1',
      'salt_main.bin',
      'hash'],
      '0d83147d47234449ecf594b5c6bb39085618bb3c84f15d526414aeeff7b3b5f7'
    );
  });

  test('version 5.0.0', () => {
    expect(flashData).toHaveProperty(['v5.0.0',
      'keepkey_main.bin',
      'hash'],
      'fa1c1b1a93c05b25e4e2ac3343f8f6215d5e4afd97f5a6f48468162dc5ae3217'
    );
  });

  test('version 4.0.3', () => {
    expect(flashData).toHaveProperty(['v4.0.3',
      'salt.bin',
      'hash'],
      'cb4d77f106d9993d0aff08268a9e288014637d29a4cb1c1590af90544eda861b'
    );

    expect(flashData).toHaveProperty(['v4.0.3',
      'keepkey.bin',
      'hash'],
      '10bb0823dfa20a30afd746eec9145b33ab11a99d42b4065115f8bcd5c84efcd0'
    );
  });

  test('version 4.0.1', () => {
    expect(flashData).toHaveProperty(['v4.0.1',
      'keepkey_main.bin',
      'hash'],
      '3c8863c15567646c71da3a8bea1a656919a2b79fe6a2a002e952126c0eadd07a'
    );

    expect(flashData).toHaveProperty(['v4.0.1',
      'bootstrap_main.bin',
      'hash'],
      'e9e2ec11cc9a65b23aa2938c26521615ce221038caed5999161ec691aa1710eb'
    );

    expect(flashData).toHaveProperty(['v4.0.1',
      'bootloader_main.bin',
      'hash'],
      '14c27bcd877f34f0b88a169f6d23ba43ee8a308270e7396dc9cbc7ff12246ebc'
    );
  });

  test('version 4.0.0', () => {
    expect(flashData).toHaveProperty(['v4.0.0',
      'keepkey_main.bin',
      'hash'],
      'e59cbc07bccffc8339d5d6ed948bcb6d2a8514e758f4ca549249ff3f6d56567e'
    );
  });

  test('version 3.1.0', () => {
    expect(flashData).toHaveProperty(['v3.1.0',
      'keepkey_main_unsigned.bin',
      'hash'],
      '1dc46ad814c9041552b3d82fc301ce579b0d707285a22a6bc6e7c39054e7bfa9'
    );
  });

  test('version 3.0.17', () => {
    expect(flashData).toHaveProperty(['v3.0.17',
      'keepkey_main.bin',
      'hash'],
      'dde9b75eb386630b753266d3de71d84b99598a2bdd72dca6c4d343c46ffb9a33'
    );
  });

  test('version 2.1.0', () => {
    expect(flashData).toHaveProperty(['v2.1.0',
      'keepkey_main.bin',
      'hash'],
      '5c4b82595e4d990154a58468ec57cbc2ea8eba10bc3869420f3984b463f05b64'
    );
  });

  test('version 2.0.11', () => {
    expect(flashData).toHaveProperty(['v2.0.11',
      'keepkey_main.bin',
      'hash'],
      '38e6a368d08ff013d9b78376b15db86dce2034ae669078e91780ad9a61864348'
    );
  });

  test('version 1.1.0', () => {
    expect(flashData).toHaveProperty(['v1.1.0',
      'keepkey_main.bin',
      'hash'],
      '4c1efbef62765145609eb2205aeee5509d164095e7256745c0e3b381cc63c2c6'
    );
  });

  test('version 1.0.4', () => {
    expect(flashData).toHaveProperty(['v1.0.4',
      'keepkey_main.bin',
      'hash'],
      '7bd1a07573dfdef1dda0c96e334540e7c6f36fb304034a86d014a6a0204725b3'
    );
  });

  test('version 1.0.3', () => {
    expect(flashData).toHaveProperty(['v1.0.3',
      'keepkey_main.bin',
      'hash'],
      '321b5b270423004651f05dc55e4401a90900efc2c562ea59bc444f3df5e86bb1'
    );
  });
});
