const express = require('express');
const router = express.Router();

router.get('/motherboards', (req, res) => {
    res.send('normal List');
});

module.exports = router;