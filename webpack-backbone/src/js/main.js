// CSS imports
import '../styles/main.css';

let $ = require('jquery'),
  Backbone = require('backbone'),
  App = require('./app.js');

$(function() {

  let app = new App();

  let Router = Backbone.Router.extend({
    routes: {
      'about': 'about',
      'contact': 'contact',
      'author/:id': 'getAuthor',
      'authors': 'getAllAuthors',
      '*actions': 'defaultRoute'
    },
    about() {
      app.about();
    },
    contact() {
      app.contact();
    },
    defaultRoute() {
      app.home();
    },
    getAuthor(id) {
      // TODO
      //console.log('Getauthor id ' + id);
    },
    getAllAuthors() {
      app.allAuthors();
    }
  });

  window.router = new Router();
  Backbone.history.start();

  /*  // manually trigger route example
    setTimeout(
      () => {
        window.router.navigate('contact', {trigger: true});
      }, 100
    );*/

});
