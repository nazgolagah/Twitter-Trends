import Ember from 'ember';

export default Ember.Controller.extend({
  countryList: Ember.inject.service(),

  actions: {
    getCountries(){
      this.get('countryList').getCountries().then(
        (response) => {
          var allCountries =  _.groupBy(response, 'country');
          delete allCountries[''];
          this.set('allCountries', allCountries);
          this.set('countriesArray', allCountries);
          this.set('countries', Object.keys(allCountries));
          return response;
        },
        (error) => {
          return error;
        }
      );
    },
  }
});
