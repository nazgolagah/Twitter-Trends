import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('navbar', function() {
    this.route('trends', {path: '/trends/:townWoeId'});
  });
});

export default Router;
