// ...

// Initial table creation
document.addEventListener("DOMContentLoaded", function () {
    createTable();
});

function convertToBinary() {
    var decimalInput = document.getElementById("decimalInput").value;
    var binaryResult = decimalToBinary(decimalInput);
    document.getElementById("binaryResult").innerText = "Binary result: " + binaryResult;

    // Add the conversion results to the table
    addToTable(decimalInput, binaryResult, binaryToDecimal(binaryResult));
}

function decimalToBinary(decimalNumber) {
    var binaryString = parseInt(decimalNumber, 10).toString(2);
    // Pad the binary string to make it 8 bits long
    return binaryString.padStart(8, '0');
}

function binaryToDecimal(binaryString) {
    return parseInt(binaryString, 2);
}

function createTable() {
    var table = document.getElementById("conversionTable").getElementsByTagName('tbody')[0];
    table.innerHTML = ""; // Clear existing table data
}

function addToTable(decimal, binary, decimalFromBinary) {
    var table = document.getElementById("conversionTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerText = decimal;
    cell2.innerText = binary;
    cell3.innerText = decimalFromBinary;
}

// Add this function to add an initial entry for demonstration purposes
function addInitialEntry() {
    var initialDecimal = 10;
    var initialBinary = decimalToBinary(initialDecimal);
    addToTable(initialDecimal, initialBinary, binaryToDecimal(initialBinary));
}


// New function to convert binary to decimal
function convertToDecimal() {
    var binaryInput = document.getElementById("binaryInput").value;
    var decimalResult = binaryToDecimal(binaryInput);
    document.getElementById("decimalResult").innerText = "Decimal result: " + decimalResult;
}

// Add this function to add an initial entry for demonstration purposes
function addInitialEntry() {
    var initialDecimal = 10;
    var initialBinary = decimalToBinary(initialDecimal);
    addToTable(initialDecimal, initialBinary, binaryToDecimal(initialBinary));
}
