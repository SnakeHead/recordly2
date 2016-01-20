if (Artists.find().count() == 0) {
  var artists = [{
    name: 'David Bowie',
    genre: 'rock'
  }, {
    name: 'Jackson Brown',
    genre: 'rock'
  }, {
    name: 'Eagles',
    genre: 'rock'
  }, {
    name: 'Rush',
    genre: 'rock'
  }, {
    name: 'Styx',
    genre: 'rock'
  }, {
    name: 'Willy Nelson',
    genre: 'country'
  }, {
    name: 'Stevie Ray Vaughn',
    genre: 'rock'
  }, {
    name: 'Katy Perry',
    genre: 'pop'
  }, {
    name: 'Faith Hill',
    genre: 'country'
  }, {
    name: 'U2',
    genre: 'rock'
  }, {
    name: 'Shakira',
    genre: 'pop'
}];

  for (var i = 0; i < artists.length; i++) {
    Artists.insert(artists[i]);
  }
}
