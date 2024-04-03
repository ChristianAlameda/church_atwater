const fs = require('fs');

// Existing file path
const existingFilePath = 'out-big.csv';

// New data to append
var newData = [
    'David',
    'Alameda',
    '2092342424',
    'cadleda@gmail.com',
    'sdfasdfasdfadsf'
];

// Read existing CSV file content
fs.readFile(existingFilePath, 'utf8', (err, existingData) => {
    if (err) {
        console.error('Error reading existing file:', err);
        return;
    }

    // Parse existing CSV data
    var existingArray = existingData.trim().split('\n').map(row => row.split(','));

    // Append the new data to the existing array
    existingArray.push(newData);

    // Convert the updated array to CSV format
    var updatedCsv = existingArray.map(row => row.join(',')).join('\n');

    // Save the updated CSV content back to the file
    fs.writeFile(existingFilePath, updatedCsv, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Data appended successfully.');
        }
    });
});