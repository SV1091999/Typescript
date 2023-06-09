function firstNonRepeated(s) {
    //To count of each character
    var countMap = {};
    // Taking input string and count character
    for (var i = 0; i < s.length; i++) {
        var c = s[i];
        countMap[c] = (countMap[c] || 0) + 1;
    }
    // Finding the first non-repeated character
    for (var i = 0; i < s.length; i++) {
        var c = s[i];
        if (countMap[c] === 1) {
            return c;
        }
    }
    //No Non repeated character Found
    return '';
}
function main() {
    var readline = require('readline');
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    var processInput = function (input) {
        if (input.toLowerCase() === 'exit') {
            rl.close();
        }
        else {
            var result = firstNonRepeated(input);
            if (result == '') {
                console.log('No Non Repeated Character Found');
            }
            else {
                console.log("First non-repeated character: ".concat(result));
            }
            rl.question('Enter a string (or "exit" to quit): ', processInput);
        }
    };
    rl.question('Enter a string (or "exit" to quit): ', processInput);
}
// Call the main function to start the program
main();
