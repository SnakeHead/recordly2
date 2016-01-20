Template.artistEdit.helpers({
  artists: function() {
    return Artists.findOne(artistId);
  }
});
