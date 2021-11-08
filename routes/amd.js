const express = require('express');
const router = express.Router();
const fs = require('fs');

let CPU;

fs.readFile('build_data/cpu.json', (err,data) => {
    if (err) 
        throw err;
    else
    CPU = JSON.parse(data);
});

router.get('/cpu', (req, res) => {
    res.render('amd/cpu',{cpus:CPU});
});

router.get('/cpu/:cpuName/motherboards', (req, res) => {
    res.send(req.params.cpuName);
});

module.exports = router;