const express = require('express');
const fs = require('fs').promises; 

const app = express();
const PORT = 3000;

// Middleware to parse JSON in the request body
app.use(express.json());

// ReadFile Endpoint (GET /readFile)
app.get('/readFile', async (req, res) => {
  const fileName = req.params.fileName;

  try {
    const content = await fs.readFile('First.txt', 'utf-8');
    res.send(content);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error reading the file');
  }
});

// WriteFile Endpoint (POST /writeFile)
app.post('/writeFile', async (req, res) => {
  const fileName = req.params.fileName;
  const data = req.body.data;

  try {
    if (!data) {
      return res.status(400).send('No data provided in the request body');
    }

    await fs.writeFile('Second.txt', data, 'utf-8');
    res.send('File written successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error writing to the file');
  }
});

// UpdateFile Endpoint (PUT /updateFile)
app.put('/updateFile', async (req, res) => {
  const fileName = req.params.fileName;
  const newData = req.body.data;

  try {
    if (!newData) {
      return res.status(400).send('No new data provided in the request body');
    }

    await fs.appendFile('Second.txt', '\n' + newData, 'utf-8');
    res.send('File updated successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating the file');
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
