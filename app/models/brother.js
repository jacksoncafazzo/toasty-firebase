import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  origin: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  hp: DS.attr()
});
