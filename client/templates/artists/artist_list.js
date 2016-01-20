Template.artistList.helpers({
  artists: function() {
    return Artists.find({});
  }
});
