const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios')

const router = express.Router();

const giphyList = [];

// return all search images
router.get('/:searchterm', (req, res) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.params.searchterm}&limit=3`)
        .then((response) => {
            console.log(response.data);
            for(let gif in response.data){
                giphyList.push({url: gif.url});
            }
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })

});

module.exports = router;
