const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  return res.json("Agora vai porra!!")
});


module.exports = router;