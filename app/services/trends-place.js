import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  getTrends(woeid) {
    let url = 'https://cors-anywhere.herokuapp.com/https://still-tundra-51054.herokuapp.com/1.1/trends/place.json';
    let promise = this.get('ajax').request(url, {
          data: {
            id: woeid,
          }
        });
    return promise;
  }
});
