export function create(rows, cols) {
    let grid = "";

    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j < cols; j++) {
            row += "- ";
        }
        grid += row + "\n";
    }

    return grid;
}

// let result = create();
// console.log(result);