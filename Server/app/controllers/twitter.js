const Twit    = require('twit');
const config  = require('../app.config');

/**
 * Initializes the twitter client with the api access info
 */
const twitClient = new Twit(
  config
);

module.exports = {

  /**
   * Calls the Twitter API to create a new tweet
   * @param  {Object} tweet Tweet information
   * @return {Object}       Error or success message
   */
  createTweet: (params) => {
    const videoUrl  = params.videoUrl;
    const comment   = params.comment;
    const tweet     = {
      status: comment + ' #Nowplaying ' + videoUrl
    };

    return new Promise((resolve, reject) => {
      twitClient.post('statuses/update', tweet, (error, data, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  },

  /**
   * Calls the Twitter API to search 5 tweets that contain
   * a youtube link and the #nowplaying hashtag
   * @param  {Object} tweet search information
   * @return {Object}       Error message or tweets info
   */
  searchTweets: () => {
    const search = {
      q: '#nowplaying+youtube.com/watch',
      count: 5
    };

    return new Promise((resolve, reject) => {
      twitClient.get('search/tweets', search, (error, data, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  }

};
