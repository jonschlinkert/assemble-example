var assemble = require('assemble');


assemble.task('default', function() {
  assemble.src('templates/*.hbs')
    .pipe(assemble.dest('dist'))
});