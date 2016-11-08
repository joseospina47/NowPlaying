/**
 * Handles ever interaction with GUI
 */
class Twitter {

  constructor(twitterService) {
    this.formData       = {};
    this.tweets         = {};
    this.twitterService = twitterService;
    this.searchTweets();
  }

  /**
   * Sends the tweet info to the twitterService
   * and handles the GUI response.
   */
  createTweet(form) {
    this.twitterService.createTweet(this.formData)
      .then((response) => {
        this.formData   = {};
        this.searchTweets();
      })
      .catch((error) => {
        console.log('Error: ' + error);
      });
  }

  /**
   * Calls the twitter service to get the tweets
   * and displays the info on the GUI.
   */
  searchTweets() {
    this.twitterService.searchTweets()
      .then((response) => {
        this.tweets = response.data.data.statuses;
      })
      .catch((error) => {
        console.log('Error: ' + error);
      });
  }
}

//Registers the controller
angular
  .module('controllers', [])
  .controller('Twitter', Twitter);

export default 'controllers';
