if (Artists.find().count() == 0) {
  var artists = [{
    name: 'David Bowie',
    genre: 'Rock'
  }, {
    name: 'Jackson Brown',
    genre: 'Rock'
  }, {
    name: 'Eagles',
    genre: 'Rock'
  }, {
    name: 'Rush',
    genre: 'Rock'
  }, {
    name: 'Styx',
    genre: 'Rock'
  }, {
    name: 'Willy Nelson',
    genre: 'Country'
  }, {
    name: 'Stevie Ray Vaughn',
    genre: 'Rock'
  }, {
    name: 'Katy Perry',
    genre: 'Pop'
  }, {
    name: 'Faith Hill',
    genre: 'Country'
  }, {
    name: 'U2',
    genre: 'Rock'
  }, {
    name: 'Shakira',
    genre: 'Pop'
}];

  for (var i = 0; i < artists.length; i++) {
    Artists.insert(artists[i]);
  }
}
