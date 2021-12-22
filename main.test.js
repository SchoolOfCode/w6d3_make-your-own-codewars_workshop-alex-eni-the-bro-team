const eeeNator = require('./main.js')

//👉 Write your tests below here:





//what should the test do?
//compare string input after being passed through the function, it should be strictly equal to the desired outcome

const strings = [
    ["Why is the sun so bright?", "Why is the sun so bright?"],
    ["Why do my feet smell if they don't have a nose?", "Why do my fEEEEEEt smEEEll if thEEEy don't havEEE a nosEEE?"],
    ["Testing is terrifying!", "TEEEsting is tEEErrifying!"],
]

describe('eeeNator answers', () => {
    test.each([strings])('Should replace every instance of "e" with 3 "E"s of any given string',
                        (actual, expected) => {
                        expect(actual).toStrictEqual(expected)
    })
})

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


