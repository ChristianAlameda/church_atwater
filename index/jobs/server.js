const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;
console.log('howdy');app.use(express.json());

app.post('/submitForm', (req, res) => {
    const newData = req.body;

    // Existing file path
    const existingFilePath = 'out-big.csv';

    // Read existing CSV file content
    fs.readFile(existingFilePath, 'utf8', (err, existingData) => {
        if (err) {
            console.error('Error reading existing file:', err);
            res.status(500).send('Error reading existing file');
            return;
        }

        // Parse existing CSV data
        const existingArray = existingData.trim().split('\n').map(row => row.split(','));

        // Append the new data to the existing array
        existingArray.push(newData);

        // Convert the updated array to CSV format
        const updatedCsv = existingArray.map(row => row.join(',')).join('\n');

        // Save the updated CSV content back to the file
        fs.writeFile(existingFilePath, updatedCsv, 'utf8', (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                res.status(500).send('Error writing to file');
            } else {
                console.log('Data appended successfully.');
                res.status(200).send('Form submitted successfully');
            }
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
