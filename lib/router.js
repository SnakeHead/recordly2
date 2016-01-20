Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [ Meteor.subscribe('artists')
    ];
  }
});
