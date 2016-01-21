// This left empty for now on purpose.
Template.artistDetail.events({
  'click .delete': function(e) {
      e.preventDefault();

      if (confirm("Delete this artist?")) {
        var currentArtistId = this._id;
        Artists.remove(currentArtistId);
      }
    }

});
