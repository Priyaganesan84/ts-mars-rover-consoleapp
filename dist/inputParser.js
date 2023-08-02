"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRoversData = exports.parsePlateauSize = void 0;
// Function to parse the plateau size input and return a Position object
function parsePlateauSize(input) {
    console.log('Input for parsePlateauSize:', input);
    const [x, y, orientation] = input.split(' ');
    const maxX = parseInt(x);
    const maxY = parseInt(y);
    console.log(maxX);
    console.log(maxY);
    console.log(orientation);
    if (isNaN(maxX) || isNaN(maxY) || !['N', 'E', 'S', 'W'].includes(orientation)) {
        console.log("I m returning null");
        return null;
    }
    console.log("I M HEREEEEE");
    // Return the parsed plateau size as a Position object // for eg 5 5 N
    return { x: maxX, y: maxY, orientation: orientation };
}
exports.parsePlateauSize = parsePlateauSize;
// Function to parse the rover data input and return an array of RoverData objects
function parseRoversData(input) {
    //for eg Input for parseRoversData: 1 2 N, LMLMLMLMM
    console.log('Input for parseRoversData:', input);
    const roverDataArray = input.split('\n');
    const roversData = [];
    //for eg RoverDataArray  1 2 N, LMLMLMLMM
    console.log("RoverDataArray" + roverDataArray);
    for (const roverData of roverDataArray) {
        const [x, y, orientation] = roverData.split(' ');
        const instructions = roverData.split(', ')[1];
        const trimmedOrientation = orientation.trim();
        console.log("inside for lopp");
        console.log(x);
        console.log(y);
        console.log("INSTR" + instructions);
        console.log("TrimmedOrientation : " + trimmedOrientation);
        console.log(['N', 'E', 'S', 'W'].includes(trimmedOrientation));
        console.log(!instructions);
        if (isNaN(parseInt(x)) || isNaN(parseInt(y)) || ['N', 'E', 'S', 'W'].includes(trimmedOrientation) || !instructions) {
            return null;
        }
        // Push the parsed rover data as a RoverData object into the array
        roversData.push({ position: { x: parseInt(x), y: parseInt(y), orientation: trimmedOrientation }, instructions });
    }
    // Return the array of parsed rovers data
    return roversData;
}
exports.parseRoversData = parseRoversData;
