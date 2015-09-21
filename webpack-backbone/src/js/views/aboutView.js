require('./about.css');

let Backbone = require('backbone');

let Model = Backbone.Model.extend({
  'title': 'About',
  'intro': 'Lorem ipsum about placeholder text'
});

module.exports = Backbone.View.extend({
  el: '.About',
  template: require("../../templates/about.handlebars"),
  initialize: function() {
    this.model = new Model();
  },
  render: function() {
    this.$el.html(this.template(this.model));
    return this;
  }
});
