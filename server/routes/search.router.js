const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

const giphyList = [];

// return all search images
router.get('/:searchterm', (req, res) => {
    const giphyList = [];
    
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.params.searchterm}&limit=3`)
        .then((response) => {
            response.data.data.forEach((gif) => {
                giphyList.push({url: gif.images.original.url, title: gif.title});
            });
            console.log(`GET Response:`, giphyList);
            res.send(giphyList);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })

});

module.exports = router;