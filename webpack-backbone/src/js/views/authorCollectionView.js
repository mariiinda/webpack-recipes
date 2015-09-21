require('./Authors.css');

let Backbone = require('backbone'),
  $ = require('jquery');

let Collection = Backbone.Collection.extend({
  url: 'data/authors.json',

  parse(response) {
    return response.authors;
  },

  initialize() {
    this.deferred = this.fetch();
  }
});

module.exports = Backbone.View.extend({
  el: '.Authors',
  template: require("../../templates/authors.handlebars"),
  initialize: function() {
    this.collection = new Collection();

  },
  render: function() {
    this.$el.html(this.template({
      'title': 'Author index',
      'intro': 'A list of all authors making use of Backbone.fetch'
    }));

    this.collection.deferred.done(() => {
      var data = this.collection.toJSON();
      var items = data.map((item) => {
        return $('<li class="Authors-listItem">').text(item.name);
      });
      this.$el.find('ul').append(items);
    });

    return this;

  }
});
