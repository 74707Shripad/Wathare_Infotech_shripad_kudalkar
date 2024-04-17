
const express = require('express');
const router = express.Router();
const Data = require('../models/DataModel');

router.get('/data', async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.post('/', async (req, res) => {
  const newData = new Data(req.body);
  try {
    const savedData = await newData.save();
    res.json(savedData);
  } catch (err) {
    console.error('Error adding data:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});


module.exports = router;
