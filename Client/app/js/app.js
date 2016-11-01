//JS
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngTweet from 'ngtweet';
import config from './app.config';
import services from './services/twitter.service';
import controllers from './controllers/twitter';

//Styles
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/site.css';

angular
  .module('nowPlaying', [
    uiRouter,
    'ngtweet',
    config,
    services,
    controllers
  ]);

angular
  .bootstrap(document, ['nowPlaying']);
