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
  createTweet: ({ videoUrl, comment }) => {
    return twitClient.post('statuses/update', { status: `${comment} #Nowplaying ${videoUrl}` });
  },

  /**
   * Calls the Twitter API to search 5 tweets that contain
   * a youtube link and the #nowplaying hashtag
   * @param  {Object} tweet search information
   * @return {Object}       Error message or tweets info
   */
  searchTweets: () => {
    const search = {
      q: '#Nowplaying+#nowplaying+youtube.com/watch',
      count: 6
    };
    return twitClient.get('search/tweets', search)
  }

};
