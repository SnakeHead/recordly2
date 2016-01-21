Template.artistList.helpers({
  artists: function() {
    return Artists.find({}, {sort: {name: 1}});
  }
});
