> Data from JSON or YAML files is passed to your templates at build time.

This is best explained through examples, so given you have a partial for buttons, `button.hbs`:

```handlebars
<button type="button" class="btn {{modifier}}">{{text}}</button>
```

And given you have a corresponding data file, `button.json`, with the following data:

```json
[
  {
    "text": "Success!",
    "modifier": "btn-success"
  },
  {
    "text": "Error!",
    "modifier": "btn-error"
  },
  {
    "text": "Warning!",
    "modifier": "btn-warning"
  }
]
```

Used like this:

```handlebars
{{#each button}}
  {{> button }}
{{/each}}
```

Results in:

```html
<button type="button" class="btn btn-success">Success!</button>
<button type="button" class="btn btn-error">Error!</button>
<button type="button" class="btn btn-warning">Warning!</button>
```

Beyond being passed to templates as context, _data files can also be used for global project configuration and setting options_. See the [documentation for data](#TODO) to learn more.

