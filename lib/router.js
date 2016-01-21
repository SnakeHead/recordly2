Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [ Meteor.subscribe('artists')
    ];
  }
});

// Add Artist Form
Router.route('/addArtist', {name: 'artistSubmit'});

// List Artists View
Router.route('/artists', function () {
  this.render('artistList');
});

// Edit Artist Form
Router.route('/artist/:_id', {
  name: 'artistEdit',
  data: function() { return Artists.findOne(this.params._id); }
});

Router.onBeforeAction('dataNotFound', {only: 'artistEdit'});
