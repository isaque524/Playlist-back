// backend/routes/admin.js
const express = require('express');
const router = express.Router();
const Music = require('../model/Music');

router.get('/', async (req, res) => {
  const playlist = await Music.find();
  res.render('admin', { playlist, music: null, musicDel: null });
});

module.exports = router;
