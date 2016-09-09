const express = require('express');
const app = express();
const request = require('request');
const promiseLib = require('./promiseLib.js');
const pttLib = require('./pttLib.js');
const port = 3000;

app.get('/', (req, res) => {
    pttLib.getPttMenu(1, (result) => {
        res.send(result);
    });
});

app.listen(port, () => { console.log('listening on port ' + port) });