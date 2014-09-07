This is all Assemble needs to successfully build a project:

```js
var assemble = require('assemble');

assemble.task('default', function() {
  assemble.src('templates/*.hbs')
    .pipe(assemble.dest('dist'))
});
```

Done! No, really, that's all you need. But your probably want more than this, right? Let's get started then!