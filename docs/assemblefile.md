# Configuring your project's assemblefile

> A brief walk-through of setting up your first assemblefile.



## 1. First things first

### Install assemble globally

This allows you to use the cli:

```bash
npm install -g assemble
```


### Install assemble locally



```bash
npm install assemble --save-dev
```


```js
var assemble = require('assemble');
```



## 2. Setup a task

There are three important elements in the most basic task (we'll cover the fourth element, `.pipe()`, later on):

###

1. `assemble.task()`: For starters, tasks have a `name` and a `function`. If you only have one task, name it `default`. We'll expand on this later.
2. `assemble.src()`
3. `assemble.dest()`

```js
assemble.task('default', function() {
  assemble.src('templates/*.hbs')
    .pipe(assemble.dest('dist'))
});
```

At this point, we have enough to build a basic project. However, at this point if you try running `assemble` in the command line you should receive an error, since the the example project needs some configuration first. Let's do that now.


## 3. Define some options



```js
assemble.task('default', function() {
  assemble.src('templates/*.hbs')
    .pipe(assemble.dest('dist'))
});
```


