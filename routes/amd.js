const express = require('express');
const router = express.Router();

router.get('/motherboards', (req, res) => {
    res.send('motherboards');
});

module.exports = router;