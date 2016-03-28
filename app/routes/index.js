import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    return this.store.findAll('brother');
  },
  actions: {
  save3(params) {
    var newBrother = this.store.createRecord('brother', params);
    newBrother.save();
    this.transitionTo('index');
  },
  destroyBrother(brother) {
    brother.destroyRecord();
    this.transitionTo('index');
  }
}
});
