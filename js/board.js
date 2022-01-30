// board.js

class Board {
    constructor(width, height, gridCellContainers) {
        this.width = width;
        this.height = height;
        this.gridCellContainers = gridCellContainers;
        this.grid = [];
        this.activeCell = {'row': 0, 'col': 0};
    }

    initGrid() {
        // init this.height x this.width grid with cell IDs as initial values
        for (var i = 0; i < this.height; i++) {
            var row = [];
            for (var j = 0; j < this.width; j++) {
                row.push(null);
            }
            this.grid.push(row);
        }
    }

    display() {
        // display grid only if within bounds
        if (this.activeCell.col < this.width && this.activeCell.row < this.height) {
            console.log(this.grid);
        }
    }

    addToGrid(letter) {
        // add letter to internal grid if within bounds
        if (this.activeCell.col < this.width && this.activeCell.row < this.height) {
            this.grid[this.activeCell.row][this.activeCell.col] = letter;
        }
    }

    removeLastLetter() {
        // remove last letter from internal grid
        if (this.activeCell.col >= 0 && this.activeCell.row >= 0) {
            this.grid[this.activeCell.row][this.activeCell.col] = null;
        }
    }

    update() {
        // create 1D array of letters currently on the grid
        var letters = [];
        for (var i = 0; i < this.height; i++) {
            var foundNull = false;
            for (var j = 0; j < this.width; j++) {
                if (this.grid[i][j] != null) {
                    letters.push(this.grid[i][j]);
                }
                else {
                    foundNull = true;
                    break;
                }
            }
            if (foundNull) {
                break;
            }
        }

        // copy internal grid state to board grid
        var cellArray = Array.from(this.gridCellContainers);
        for (var i = 0; i < cellArray.length; i++) {
            if (i < letters.length) {
                cellArray[i].innerHTML = letters[i];
            }
            else {
                cellArray[i].innerHTML = null;
            }
        }
    }

    incrementActiveCell() {
        // increment activeCell with grid bounds
        if (this.activeCell.col < this.width && this.activeCell.row < this.height) {
            // increment col if word not complete
            if ((this.activeCell.col + 1) % this.width != 0) {
                this.activeCell.col++;
            }
            // increment row and reset col index if word complete
            else {
                this.activeCell.row++;
                this.activeCell.col = 0;
            }
        }
    }

    decrementActiveCell() {
        // if activeCell is [0,0] don't do anything anymore
        if (this.activeCell.col == 0 && this.activeCell.row == 0) {
            return false;
        }
        else {
            // decrement col if not first column
            if (this.activeCell.col - 1 >= 0) {
                this.activeCell.col--;
            }
            // decrement row and reset col index
            else {
                this.activeCell.row--;
                this.activeCell.col = this.width - 1;
            }
        }
    }
}
