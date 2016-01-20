Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [ Meteor.subscribe('artists')
    ];
  }
});

Router.route('/artists', function () {
  this.render('artistList');
});

Router.route('/artist/:_id', {
  name: 'artistEdit',
  data: function() { return Artists.findOne(this.params._id); }
});
