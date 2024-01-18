// backend/routes/api.js
const express = require('express');
const router = express.Router();
const Music = require('../model/Music');

router.get('/music', async (req, res) => {
  const playlist = await Music.find();
  res.json(playlist);
});

// Add other API-related routes as needed

module.exports = router;
