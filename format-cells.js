var tableRows = Array.from(document.querySelectorAll(".table-row"));
const lastTableRow = tableRows[tableRows.length - 1];

// Make sure the bottom-most table row has the correct bottom border applied.
lastTableRow.querySelector(".left-div p").classList.add("bottom-cell");
lastTableRow.querySelector(".right-div p").classList.add("bottom-cell");

// Remove odd-indexed rows from the array
for (let i = tableRows.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
        tableRows.splice(i, 1);
    }
}

// Add "blue" as a prefix to status classes for remaining rows
tableRows.forEach((row) => {
    // Select all <p> elements inside the row
    row.querySelectorAll(".left-div p, .right-div p").forEach((p) => {
        if (!p.classList.contains("blue")) {
            p.classList.add("blue")
        }
        p.classList.forEach((className) => {
            if (className.endsWith("progress")) {
                p.classList.replace(className, "blue-progress");
            } else if (className.endsWith("help")) {
                p.classList.replace(className, "blue-help");
            } else if (className.endsWith("miss")) {
                p.classList.replace(className, "blue-miss");
            } else if (className.endsWith("complete")) {
                p.classList.replace(className, "blue-complete");
            }
        });
    });
});