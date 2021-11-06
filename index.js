const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use("/images",express.static("images"));
app.use("/styles",express.static("styles"));

app.get('/', (req, res) => {
    res.render('./home/home');
    res.end();
});

const intelRouter = require('./routes/intel');
const amdRouter = require('./routes/amd');

app.use('/intel', intelRouter);
app.use('/amd', amdRouter);

app.listen(3000);

