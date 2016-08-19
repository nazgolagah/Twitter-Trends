import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return params;
  },
  actions: {
    didTransition(){
      this.controller.set('trends', '');
    }
  }
});
