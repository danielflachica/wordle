// board.js

class Board {
    constructor(width, height, gridCellContainers) {
        this.width = width;
        this.height = height;
        this.gridCellContainers = gridCellContainers;
        this.grid = [];
        this.activeCell = {'row': 0, 'col': 0};
    }

    // init this.height x this.width grid with cell IDs as initial values
    initGrid() {
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
        // add letter to internal grid and render if within bounds
        if (this.activeCell.col < this.width && this.activeCell.row < this.height) {
            this.grid[this.activeCell.row][this.activeCell.col] = letter;
            this.render(letter);
            this.incrementActiveCell();
        }
    }

    render(letter) {
        var cellArray = Array.from(this.gridCellContainers);
        var activeCellID = this.activeCell.row.toString().concat(this.activeCell.col.toString());

        for (var i = 0; i < cellArray.length; i++) {
            if (cellArray[i].id == activeCellID) {
                document.getElementById(activeCellID).innerHTML = letter;
                break;
            }
        }
    }

    incrementActiveCell() {
        // increment column if word not complete
        if ((this.activeCell.col + 1) % this.width != 0) {
            this.activeCell.col++;
        }
        // increment row and reset column if word complete
        else {
            this.activeCell.row++;
            this.activeCell.col = 0;
        }
    }
}
