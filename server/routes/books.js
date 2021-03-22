const express = require('express');
const router = express.Router();
const booksModel = require("./../model/books");

/* GET home page. */
router.get('/api/books', async (req, res, next) => {
  try {
    const books = await booksModel.find()
    res.status(200).json(books)

  } catch(err) {
    res.status(500).send(err)
  }
});

router.get('/api/books/:id', async (req, res, next) => {
  try {
    const book = await booksModel.findById(req.params.id)
    res.status(200).json(book)
  } catch(err) {
    res.status(500).send(err)
  }
})

router.post('/api/books', async (req, res, next) => {
  try {
    const insertedValue = await booksModel.create(req.body)

    res.status(200).json(insertedValue)
  } catch(err) {
    res.status(500).send(err)
  }
})

router.patch('/api/books/:id', async (req, res, next) => {
  try {
    const updateValue = await booksModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updateValue)
  } catch(err) {
    res.status(500).send(err)
  }
})

router.delete('/api/books/:id', async (req, res, next) => {
  try {
    const deleteValue = await booksModel.findByIdAndDelete(req.params.id)
    res.status(200).json(deleteValue)
  } catch(err) {
    res.status(500).send(err)
  }
})

module.exports = router;
