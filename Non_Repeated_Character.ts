function firstNonRepeated(s: string): string {
  //To count of each character
  const countMap: { [key: string]: number } = {};

  // Taking input string and count character
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    countMap[c] = (countMap[c] || 0) + 1;
  }

  // Finding the first non-repeated character
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (countMap[c] === 1) {
      return c;
    }
  }

  //No Non repeated character Found
  return '';
}

function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    const processInput = (input: string) => {
      if (input.toLowerCase() === 'exit') {
        rl.close();
      } else {
        const result = firstNonRepeated(input);
        if (result == '') {
          console.log('No Non Repeated Character Found');
        } else {
          console.log(`First non-repeated character: ${result}`);
        }
        rl.question('Enter a string (or "exit" to quit): ', processInput);
      }
    };
  
    rl.question('Enter a string (or "exit" to quit): ', processInput);
  }

// Call the main function to start the program
main();
