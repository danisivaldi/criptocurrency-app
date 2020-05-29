const express = require('express');
const authMiddleware = require('../middlewares/auth')

const router = express.Router();

router.use(authMiddleware);

router.get('/toplist', (req, res) => {
    res.send({ ok: true, user: req.userId });
});

module.exports = app => app.use('/coins', router);