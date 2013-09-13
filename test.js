var mimeOf = require("./");

it('returns accurate mime type for given uri', function(){
  expect(mimeOf('foo.mp3')).to.equal('audio/mpeg');
  expect(mimeOf('bar/qux/quuux.ogg')).to.equal('audio/ogg');
  expect(mimeOf('mp4')).to.equal('video/mp4');
  expect(mimeOf('webm')).to.equal('video/webm');
  expect(mimeOf('ogv')).to.equal('video/ogg');
  expect(mimeOf('mkv')).to.equal('video/x-matroska');
});
