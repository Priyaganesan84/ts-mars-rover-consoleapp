"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import required modules and functions
const marsRover_1 = require("./marsRover");
const inputParser_1 = require("./inputParser");
const readline = require("readline");
// Create a readline interface to handle user input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Function to start the console application
function startConsoleApp() {
    // Prompt the user to enter the plateau size
    rl.question('Enter the plateau size (e.g., 5 5 N): ', (plateauSizeInput) => {
        // Prompt the user to enter the rover data
        rl.question('Enter rover data (e.g., 1 2 N, LMLMLMLMM): ', (roverDataInput) => {
            // Parse the plateau size input
            const plateauSize = (0, inputParser_1.parsePlateauSize)(plateauSizeInput);
            // Parse the rover data input
            const roversData = (0, inputParser_1.parseRoversData)(roverDataInput);
            // Log the parsed plateau size and rover data to verify
            console.log(plateauSize);
            console.log(roversData);
            // Check if both plateau size and rover data are valid
            if (plateauSize && roversData) {
                // Calculate the final positions of the rovers using moveRovers function
                const roverResults = (0, marsRover_1.moveRovers)(plateauSize, roversData);
                // Print the final positions of the rovers to the console
                console.log('Final Positions:');
                roverResults.forEach((result) => console.log(result));
            }
            else {
                console.log('Invalid input. Please provide valid plateau size and rover data.');
            }
            rl.close();
        });
    });
}
startConsoleApp();
