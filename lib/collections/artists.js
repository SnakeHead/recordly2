Artists = new Mongo.Collection('artists');

Meteor.methods({
  artistInsert: function(artistAttributes) {
    check(Meteor.userId(), String);
    check(artistAttributes, {
      name: String,
      genre: String
    });

    var artistWithSameName = Artists.findOne({name: artistAttributes.name});
        if (artistWithSameName) {
          return {
            artistExists: true,
            _id: artistWithSameName._id
          }
        }

    var user = Meteor.user();
    var theArtist = _.extend(artistAttributes, {
      userId: user._id,
      owner: user.username,
      added: new Date()
    });

    var artistId = Artists.insert(theArtist);

    return {
      _id: artistId
    };
  }
});
