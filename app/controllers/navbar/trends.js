import Ember from 'ember';

export default Ember.Controller.extend({
  trendsPlace: Ember.inject.service(),
  // woeid: this.get(townWoeId),
  actions: {
    getTrends(woeid){
      this.get('trendsPlace').getTrends(woeid).then(
        (response) => {
          console.log('im success 1', response);
          this.set('trends', response[0].trends);
          return response;
        },
        (error) => {
          console.log('im error 1', error);
          return error;
        }
      );
    },
  }
});
