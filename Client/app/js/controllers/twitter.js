/**
 * Handles ever interaction with GUI
 */
class Twitter {

  constructor(twitterService) {
    this.formData = {};
    this.twitterService = twitterService;
    this.searchTweets();
  }

  /**
   * Sends the the tweet info to the twitterService
   * and handles the GUI response.
   */
  createTweet() {
    this.twitterService.createTweet(this.formData)
      .then((response) => {
        this.formData = {};
        console.log(response);
      })
      .catch((error) => {
        console.log('Error: ' + error);
      });
  }

	/**
	 * Calls the twitter service to geet the tweets
	 * and displays the on the GUI.
	 */
  searchTweets() {
    this.twitterService.searchTweets()
      .then((response) => {
        this.formData = {};
        console.log(response);
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
