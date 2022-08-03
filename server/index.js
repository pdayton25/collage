const express = require('express');
const mongoose = require('mongoose');
const app = express();

//allows information to revieved in json format
app.use(express.json())

//tells us which database were communicating with
mongoose.connect('', {
    useNewUrlParser: true,
});

app.listen(3001, () => {
    console.log('server is running on port 3001...')
});