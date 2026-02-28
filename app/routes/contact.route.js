const express = require('express');
const router = express.Router();

// Ví dụ route
router.get('/', (req, res) => {
  res.send('Contact route is working!');
});

module.exports = router;
