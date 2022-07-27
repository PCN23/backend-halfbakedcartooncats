const { Router } = require('express');
const { cats } = require('../../data/cats');
const Cat = require('../models/cats');
const router = Router();

router
  .get('/:id', async (req, res) => {
    console.log('id param:', req.params.id);
    const cat = await Cat.getById(req.params.id);
    // const cat = cats.find((cat) => cat.id === req.params.id);
    res.json(cat);
  })
  .get('/', async (req, res) => {
    const cats = await Cat.getAll();
    console.log(cats);
    const ids = cats.map((cat) => ({ id: cat.id, name: cat.name }));
    console.log(ids);
    res.json(ids);
  });

module.exports = router;
