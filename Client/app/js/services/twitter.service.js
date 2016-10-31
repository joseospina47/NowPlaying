/**
 * Handles every transaction with the Twitter api
 */
class TwitterService {

  constructor($http, api_url) {
    this.$http    = $http;
    this.api_url  = api_url;
  }

  /**
   * Calls the twitter api to create a new tweet
   * @param  {Object} tweet
   * @return {Object} Error or success message
   */
  createTweet(tweet) {
    return this.$http.post(this.api_url + 'update', tweet)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  }

  /**
   * Calls the twitter api to search for tweets
   * @return {Object} Error or tweets
   */
  searchTweets() {
    return this.$http.get(this.api_url + 'search')
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  }

}

//Registers the service
angular
  .module('services', [])
  .factory('twitterService',
    ($http, api_url) => new TwitterService($http, api_url)
  );

export default 'services';
