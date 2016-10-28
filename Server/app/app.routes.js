const routes  = require('express').Router();
const twitter = require('./controllers/twitter');

/**
 * Defines what to do when "/update" is accessed
 */
routes.post('/update', (req, res) => {
  twitter.createTweet(req.body)
    .then((response) => {
      res.json({
        message: 'Status successfully updated'
      });
    })
    .catch((error) => {
      res.json(error);
    });
});

/**
 * Defines what to do when "/search" is accessed
 */
routes.get('/search', (req, res) => {
  twitter.searchTweets()
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = routes;
