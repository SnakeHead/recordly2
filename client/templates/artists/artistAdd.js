Template.artistSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    // Get the artist info from the form and insert it into the database (Mongo collection).
    var artistInfo = {
      name: $(e.target).find('[name=artistName]').val(),
      genre: $(e.target).find('[name=artistGenre]').val()
    };

    Meteor.call('artistInsert', artistInfo, function(error, result) {
      // display the error to the user and abort
      if (error)
        return alert(error.reason);

        // show this result but route anyway
      if (result.artistExists)
          alert('This artist has already been added.');

        Router.go('/artists');

    });
  }
});
