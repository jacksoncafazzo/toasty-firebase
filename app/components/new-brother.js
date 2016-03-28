import Ember from 'ember';

export default Ember.Component.extend({
  addNewBrother: false,
  actions: {
    brotherFormShow() {
      this.set('addNewBrother', true);
    },
    save1() {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        hp: this.get('hp')
      };
      this.set('addNewBrother', false);
      this.sendAction('save2', params);
    }
  }
});
