import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  getCountries() {
    let url = 'https://cors-anywhere.herokuapp.com/https://still-tundra-51054.herokuapp.com/1.1/trends/available.json';
    let promise = this.get('ajax').request(url);
    return promise;
  }
});
