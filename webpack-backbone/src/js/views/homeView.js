require('./home.css');

let Backbone = require('backbone');

let Model = Backbone.Model.extend({
  'title': 'Home',
  'intro': 'Lorem ipsum home placeholder text'
});

module.exports = Backbone.View.extend({
  el: '.Home',
  template: require("../../templates/home.handlebars"),
  initialize: function() {
    this.model = new Model();
  },
  render: function() {
    this.$el.html(this.template(this.model));
    return this;
  }
});
