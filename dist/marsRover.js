"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveRovers = void 0;
// Function to validate if an instruction is valid (consists only of 'L', 'R', and 'M' characters)
function isValidInstruction(instruction) {
    return /^[LRM]+$/.test(instruction);
}
// Main function to move multiple rovers on the plateau
function moveRovers(plateauSize, roversData) {
    const { x: maxX, y: maxY } = plateauSize;
    // Function to move a single rover based on its instructions and return its final position
    function moveRover(position, instructions) {
        let { x, y, orientation } = position;
        const directions = ['N', 'E', 'S', 'W'];
        function turnLeft() {
            orientation = directions[(directions.indexOf(orientation) - 1 + 4) % 4];
        }
        function turnRight() {
            orientation = directions[(directions.indexOf(orientation) + 1) % 4];
        }
        function moveForward() {
            switch (orientation) {
                case 'N':
                    y = Math.min(y + 1, maxY); // Constrain the movement within the maxY boundary
                    break;
                case 'E':
                    x = Math.min(x + 1, maxX); // Constrain the movement within the maxX boundary
                    break;
                case 'S':
                    y = Math.max(y - 1, 0); // Constrain the movement within the lower boundary (y=0)
                    break;
                case 'W':
                    x = Math.max(x - 1, 0); // Constrain the movement within the left boundary (x=0)
                    break;
            }
            // Additional step to ensure the rover doesn't go beyond the lower-left boundary
            x = Math.max(x, 0);
            y = Math.max(y, 0);
        }
        for (const instruction of instructions) {
            if (!isValidInstruction(instruction)) {
                // Invalid instruction found, skip this rover's instructions
                console.warn(`Skipping rover's instructions due to invalid instruction: ${instruction}`);
                break;
            }
            switch (instruction) {
                case 'L':
                    turnLeft();
                    break;
                case 'R':
                    turnRight();
                    break;
                case 'M':
                    moveForward();
                    break;
            }
        }
        return { x, y, orientation };
    }
    return roversData.map(({ position, instructions }) => {
        const finalPosition = moveRover(position, instructions);
        return `${finalPosition.x} ${finalPosition.y} ${finalPosition.orientation}`;
    });
}
exports.moveRovers = moveRovers;
exports.default = moveRovers;
