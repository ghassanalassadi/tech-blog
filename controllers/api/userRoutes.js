const router = require("express").Router();
const { User } = require("../../models");

router.post('/', async (req, res) => {
    try {

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', async (req, res) => {
    try {
    } catch (err) {
        res.status(400).json(err);
    }
});