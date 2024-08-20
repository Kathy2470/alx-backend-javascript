const readline = require('readline');

// Create an interface to read from stdin
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Display the welcome message
console.log("Welcome to Holberton School, what is your name?");

// Handle input from the user
rl.question('', (name) => {
    console.log(`Your name is: ${name}`);
    rl.close();
});

// Display the closing message when the program ends
rl.on('close', () => {
    console.log("This important software is now closing");
    process.exit(0);
});
