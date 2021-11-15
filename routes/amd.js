const express = require('express');
const router = express.Router();
const fs = require('fs');

let CPU;
let motherboard;
let GPU;
let coolers;
let storage;

fs.readFile('build_data/motherboard.json', (err, data) => {
    if (err) 
        throw err;
    else
        motherboard = JSON.parse(data);
});

fs.readFile('build_data/cpu.json', (err,data) => {
    if (err) 
        throw err;
    else
        CPU = JSON.parse(data);
});

fs.readFile('build_data/vc.json', (err,data) => {
    if (err) 
        throw err;
    else
        GPU = JSON.parse(data);
});

fs.readFile('build_data/cpu-cooler.json', (err,data) => {
    if (err) 
        throw err;
    else
        coolers = JSON.parse(data);
});

fs.readFile('build_data/internal-hard-drive.json', (err,data) => {
    if (err) 
        throw err;
    else
        storage = JSON.parse(data);
});

router.get('/cpu', (req, res) => {
    res.render('amd/cpu',{cpus:CPU});
});

router.get('/cpu/:cpuName/motherboards', (req, res) => {
    let selcpu = req.params.cpuName;
    res.render('amd/motherboard',{ selcpu ,mbds:motherboard});
});

router.get('/cpu/:cpuName/motherboards/:motherboardName/gpu', (req, res) => {
    res.render('amd/gpu',{gpu:GPU});
});

router.get('/cpu/:cpuName/motherboards/:motherboardName/gpu/:gpuName/coolers', (req, res) => {
    res.render('amd/coolers',{coolers:coolers});
});

router.get('/cpu/:cpuName/motherboards/:motherboardName/gpu/:gpuName/coolers/:coolerName/storage', (req, res) => {
    res.render('amd/storage',{storage:storage});
});

module.exports = router;