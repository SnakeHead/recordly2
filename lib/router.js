Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [ Meteor.subscribe('artists')
    ];
  }
});

Router.route('/artists', {name: 'artistList'});
