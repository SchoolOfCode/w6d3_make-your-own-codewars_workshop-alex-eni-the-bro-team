// EEExcEEEllEEEnt strings
// you've been looking at some memes and you came across the famous E meme. As a result, you would like to automate your comments on YouTube, giving them extra E's. However, your custom mechanical keyboard only has a limited amount of keypresses before it breaks the switch. Your function should replace every e with 3 capital E's.
// example - Jasien's lesson was interesting
// JasiEEEns lEEEsson was intEEErEEEsting



//👉 Write the function your CodeWarriors will start with below here:

// module.exports = eeeNator();

module.exports = function eeeNator(string) {
// your function goes here!

    return (string.replace(/[eE]/g,  "EEE"));
}












