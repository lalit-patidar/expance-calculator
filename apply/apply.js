const path = require('path');
const express = require('express');

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public')
console.log(publicDirectoryPath)

app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
    
})

app.listen(1300, () => {
    console.log('server created successfully and runnig at 1300 port')
})