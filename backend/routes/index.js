var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', async function(req, res, next) {
  const section = 'home'; // You can choose the section you want

  try {
    const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.NY_API_KEY}`);
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
