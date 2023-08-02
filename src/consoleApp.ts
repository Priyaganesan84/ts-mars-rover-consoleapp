// Import required modules and functions
import { moveRovers, Position, RoverData } from './marsRover';
import { parsePlateauSize, parseRoversData } from './inputParser';
import * as readline from 'readline';

// Create a readline interface to handle user input from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to start the console application
function startConsoleApp(): void {
  // Prompt the user to enter the plateau size
  rl.question('Enter the plateau size (e.g., 5 5 N): ', (plateauSizeInput: string) => {
    // Prompt the user to enter the rover data
    rl.question('Enter rover data (e.g., 1 2 N, LMLMLMLMM): ', (roverDataInput: string) => {
      // Parse the plateau size input
      const plateauSize = parsePlateauSize(plateauSizeInput);
      // Parse the rover data input
      const roversData = parseRoversData(roverDataInput);

      // Log the parsed plateau size and rover data to verify
      console.log(plateauSize);
      console.log(roversData);

      // Check if both plateau size and rover data are valid
      if (plateauSize && roversData) {
        // Calculate the final positions of the rovers using moveRovers function
        const roverResults = moveRovers(plateauSize, roversData);

        // Print the final positions of the rovers to the console
        console.log('Final Positions:');
        roverResults.forEach((result) => console.log(result));
      } else {
        console.log('Invalid input. Please provide valid plateau size and rover data.');
      }

      rl.close();
    });
  });
}

startConsoleApp();
