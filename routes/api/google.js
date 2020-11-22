const router = require("express").Router();
const axios = require("axios");


router.get("/google", (req, res) => {
    axios.get("https://ww.googleapis.com/books/v1/volumes?q=" + req.body)
    .then(data => res.json(data))
})