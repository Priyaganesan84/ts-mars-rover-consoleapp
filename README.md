Mars Rover Console Application
The Mars Rover Console Application is a TypeScript-based program that simulates the movement of multiple rovers on the surface of Mars. The application takes user input for the plateau size and rover data and then calculates and displays the final positions of the rovers after executing their movement instructions.

Prerequisites
Before running the Mars Rover Console Application, ensure you have the following installed:

Node.js - Download and install Node.js from the official website: Node.js
Installation
Clone the repository or download the source code.
Open a terminal or command prompt and navigate to the project directory.
Usage
Open a terminal or command prompt and navigate to the project directory.

Install the required dependencies by running the following command:
cd ts-mars-rover-consoleapp
npm init -y
npm install readline-sync
npm install -g typescript
npm i --save-dev @types/node


tsc
node dist/consoleApp.js

The application will prompt you to enter the plateau size in the format "X Y Orientation" (e.g., "5 5 N"). Press Enter after entering the value.

Next, the application will prompt you to enter rover data in the format "X Y Orientation, Instructions" (e.g., "1 2 N, LMLMLMLMM"). Press Enter after entering each rover's data. You can input data for multiple rovers by providing each rover's data on a new line.

After entering the rover data, the application will display the final positions of all the rovers on the plateau.
Enter the plateau size (e.g., 5 5 N): 5 5 N
Enter rover data (e.g., 1 2 N, LMLMLMLMM): 1 2 N, LMLMLMLMM
Final Positions:
0 2 W






