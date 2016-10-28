const config  = require('../config');
const Twit    = require('twit');

const client = new Twit(
  config
);

module.exports = {

  /**
   * Calls the Twitter API to create a new tweet
   * @param  {Object} tweet Tweet information
   * @return {Object}       Error or success message
   */
  createTweet : (params) => {
    const videoUrl  = params.videoUrl;
    const comment   = params.comment;
    const tweet     = {
      status: comment + ' #Nowplaying ' + videoUrl
    }

    return new Promise((resolve, reject) => {
      client.post('statuses/update', tweet, (error, data, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  }

};
