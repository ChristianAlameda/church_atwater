console.log('hi');
function submitForm(firstNameInput, lastNameInput, phoneInput,emailInput,whyJoin){
    const fs = require('fs');
    console.log('hello');
    // Existing file path
    const existingFilePath = 'out-big.csv';

    // New data to append
    var newData = [
        firstNameInput,lastNameInput, phoneInput,emailInput,whyJoin
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
}

// submitForm(
//     'Joe',
//     'Alameda',
//     23,
//     '1@gmail.com',
//     'because'
// )