Template.artistEdit.helpers({
  artists: function() {
    return Artists.findOne(artistId);
  },

  selectedGenre: function(key) {
    return key == this.genre ? 'selected' : '';
  }

});
