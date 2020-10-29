const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 1300

const publicDirectoryPath = path.join(__dirname, '../public')
console.log(publicDirectoryPath)

app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
    
})

app.listen(port, () => {
    console.log('server created successfully and runnig at 1300 port')
})