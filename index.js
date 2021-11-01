const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello World!');
    res.end();
});

const intelRouter = require('./routes/intel');
const amdRouter = require('./routes/amd');

app.use('/intel', intelRouter);
app.use('/amd', amdRouter);

app.listen(3000);

