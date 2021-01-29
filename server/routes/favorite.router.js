const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "favorite"`
  pool.query(queryText)
    .then((result) => {
      res.send(result.rows)
    }).catch((error) => {
      console.error(error);
      res.sendStatus(500)
    })
});

// add a new favorite
router.post('/', (req, res) => {
  console.log(`In favorite POST: URL: ${req.body.url} Title: ${req.body.title}`);
  const newFavorite = req.body;
  const queryText =`
    INSERT INTO "favorite" ("url", "title")
    VALUES ($1, $2);
  `;

  pool.query(queryText, [newFavorite.url, newFavorite.title])
  .then((response)=>{
    console.log(response)
    res.sendStatus(200);
  }).catch((error)=>{
    console.log(error);
    res.sendStatus(500)
  })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  console.log(`In PUT category: favid: ${req.params.favId} category_id: ${req.body.category_id}`);
  const queryText = `UPDATE "favorite" SET category_id = $1 WHERE id=$2;`;
  pool.query(queryText, [req.body.category_id, req.params.favId])
    .then((result) => {
      console.log(`PUT category ID success.`);
      res.sendStatus(201);
    }).catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
