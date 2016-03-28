import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    delete(brother) {
      if (confirm('Are you sure you want to delete this brother?')) {
            this.sendAction('destroyBrother', brother);
      }
    },
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    }
  }
});
