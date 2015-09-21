require('./contact.css');

let Backbone = require('backbone');

let Model = Backbone.Model.extend({
  'title': 'Contact',
  'intro': 'Lorem ipsum Contact placeholder text'
});

module.exports = Backbone.View.extend({
  el: '.Contact',
  template: require("../../templates/contact.handlebars"),
  initialize: function() {
    this.model = new Model();
    //  this.render();
  },
  render: function() {
    this.$el.html(this.template(this.model));
    return this;
  }
});
