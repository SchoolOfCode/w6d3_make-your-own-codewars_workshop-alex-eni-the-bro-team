const eeeNator = require('./main.js')

//👉 Write your tests below here:


describe('eeeNator answers', () => {
    test.each([
        ["Hello there, sir", "HEEEllo thEEErEEE, sir"],
        ["Shrek is love", "ShrEEEk is lovEEE"],
        ["Why is the sun so bright?", "Why is the sun so bright?"],
        ["E is one of the most common letters in the English alphabet", "EEE is onEEE of thEEE most common lEEEttEEErs in thEEE EEEnglish alphabEEEt"],
        ["Why do my feet smell if they don't have a nose?", "Why do my fEEEEEEt smEEEll if thEEEy don't havEEE a nosEEE?"],
        ["Testing is terrifying!", "TEEEsting is tEEErrifying!"],
        ["According to all known laws of aviation, there is no way a bee should be able to fly.", "According to all known laws of aviation, thEEErEEE is no way a bEEEEEE should bEEE ablEEE to fly."],
        ["eeeeeeeeeee", "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE"],
        ["bruh", "bruh"],
        ["Excellent", "EEExcEEEllEEEnt"]
    ])('Should replace every instance of "e" or "E" with 3 "E"s of any given string',
                        (actual, expected) => {
                        expect(actual).toEqual(expected)
    })
})












// Ignore! We kept this for our own learning

// test(`Should replace every instance of "e" with 3 "E"s of any given string`, () => {
//     const actual = eeeNator("Hello there, sir");
//     const expected = "HEEEllo thEEErEEE, sir";

//     expect(actual).toBe(expected); //assertion
// });

// test(`Should replace every instance of "e" with 3 "E"s of any given string`, () => {
//     const actual = eeeNator("Why is the sun so bright?");
//     const expected = "Why is the sun so bright?";

//     expect(actual).toBe(expected);
// });

// test(`Should replace every instance of "e" with 3 "E"s of any given string`, () => {
//     const actual = eeeNator("Why do my feet smell if they don't have a nose?");
//     const expected = "Why do my fEEEEEEt smEEEll if thEEEy don't havEEE a nosEEE?";

//     expect(actual).toBe(expected);
// });

// test(`Should replace every instance of "e" with 3 "E"s of any given string`, () => {
//     const actual = eeeNator("Testing is terrifying!");
//     const expected = "TEEEsting is tEEErrifying!";

//     expect(actual).toBe(expected);
// });


