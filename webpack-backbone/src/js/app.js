require('./app.css');

let $ = require('jquery'),
  Backbone = require('backbone'),
  HomeView = require('./views/homeView'),
  AboutView = require('./views/aboutView'),
  ContactView = require('./views/contactView'),
  AuthorCollectionView = require('./views/authorCollectionView');

let Nav = Backbone.View.extend({
  template: require("../templates/mainNav.handlebars"),

  initialize() {
    this.render();
  },

  render() {
    this.$el.html(this.template());
  }
});

let App = Backbone.View.extend({
  el: $('.App'),

  template: require("../templates/app.handlebars"),

  initialize: function() {
    this.render();
  },

  render: function() {
    let nav = new Nav({
      el: this.$('#mainNav')
    });

    this.$el.append(this.template({
      title: 'Demo Backbone App',
      'intro': 'This is a simple Backbone.js app example with nested views and routing'
    }));

    this.homeView = new HomeView({
      el: this.$('.App-SubContent')
    });

    this.aboutView = new AboutView({
      el: this.$('.App-SubContent')
    });

    this.contactView = new ContactView({
      el: this.$('.App-SubContent')
    });

    this.authorCollectionView = new AuthorCollectionView({
      el: this.$('.App-SubContent')
    });

    return this;
  },

  home() {
    this.homeView.render();
  },

  about() {
    this.aboutView.render();
  },

  contact() {
    this.contactView.render();
  },

  allAuthors() {
    this.authorCollectionView.render();
  }
});

module.exports = App;
