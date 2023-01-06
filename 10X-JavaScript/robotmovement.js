let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Define your class here
// your class name should be 'RobotMovement' and method names as 'moveUp', 'moveDown', 'moveLeft' and 'moveRight' 
class RobotMovement {
    constructor() {
        this.xCoordinate = 0;
        this.yCoordinate = 0;
    }
    moveUp() {
        return this.yCoordinate = this.yCoordinate + 1;
    }
    moveDown() {
        return this.yCoordinate = this.yCoordinate - 1;
    }
    moveRight() {
        return this.xCoordinate = this.xCoordinate + 1;
    }
    moveLeft() {
        return this.xCoordinate = this.xCoordinate - 1;
    }
}



// DO NOT CHANGE ANYTHING BELOW THIS LINE
let Num = parseInt(readLine());
let myRobotMove = new RobotMovement();
for (let index = 0; index < Num; index++) {
    let currentMovement = readLine();
    if (currentMovement === "up") {
        myRobotMove.moveUp();
    } else if (currentMovement === "down") {
        myRobotMove.moveDown();
    } else if (currentMovement === "left") {
        myRobotMove.moveLeft();
    } else {
        myRobotMove.moveRight();
    }
}
console.log(myRobotMove.xCoordinate);
console.log(myRobotMove.yCoordinate);