
By now your entire Gruntfile config would look something like this:

```js
grunt.initConfig({

  assemble: {
    options: {
      partials: ['templates/includes/*.hbs'],
      layout: 'templates/layouts/default.hbs'
    },
    site: {
      files: {'dest/': ['templates/*.hbs']}
    }
  }
});
```

And that's a wrap! At least for this example, which covers only a fraction of what Assemble has to offer. Please [visit Assemble's documentation](http://assemble.io) if you want to learn about using Assemble, the API, how to extend Assemble, or other topics such as:

* [Creating plugins](http://assemble.io/plugins/)
* [Registering helpers](http://assemble.io/helper/)
* [Adding template engines](http://assemble.io/engines/)

If you don't find what you need here or in the docs, we encourage you to visit Assemble's [GitHub Issues][issues] page to create an issue, we're always happy to help new users get started!
