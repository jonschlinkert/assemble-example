
> Templates keep your code as organized, modular, and reusable as it can be. Which means projects will be easier to maintain as a result.

A template is a document or document fragment that contains variables that will be replaced (by the template engine) with actual data, content or other documents. Assemble uses [Handlebars.js](handlebarsjs.com) as its default template engine, so the syntax you see in the examples comes from that library.

Handlebars is super powerful, giving you as much freedom and power as you need to arrange your templates the way you want them. Assemble adds to this by offering built-in support and conventions for the following template structures:

### Template types

* **Layouts**: used to "wrap" pages with common or site-wide elements, such as headers and footers, the `<head></head>` section, navigation and so on. Note that _layouts are also optional_.
* **Pages**: typically have a 1-to-1 relationship with the actual generated HTML pages in a project, e.g. `about.hbs` => `about.html` or `about/index.html`. But pages can also be dynamically generated from config data. It might also help to think of a page as something that would get inserted into the middle of a layout. See [how Less.js uses pages](https://github.com/less/less-docs/blob/master/templates/index.hbs) to build their [documentation](http://lesscss.org/features/).
* **Partials**: referred to sometimes as _includes_, partials are like document fragments, snippets, or other small chunks of reusable code that will be included, inserted or embedded into other templates at build time. A partial can be a button, or a navbar, or even a Google Analytics script. For an example, see [how Zurb Foundation uses partials](https://github.com/zurb/foundation/tree/master/doc/includes) to build their [documentation](http://foundation.zurb.com/docs/).

Here are some examples and additional explanation of each template type.

#### Layouts

As mentioned above, layouts are used to "wrap" other pages with common elements. So a basic layout might look something like this:

```handlebars
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <!-- variables like `title` are simply placeholders for
    real data -->
    <title>{{title}}</title>
  </head>
  <body>
    <!-- insertion point for any page using this layout -->
    {{> body }}
  </body>
</html>
```

**Layout configuration**

You can tell Assemble that you want to use a particular layout by defining it in the options:

```js
options: {
  layout: 'path/to/my-default-layout.hbs'
}
```

If you need more than one layout, you can optionally define a base directory for layouts using `layoutdir`:

```js
options: {
  layoutdir: 'path/to/layouts'
  layout: 'my-default-layout.hbs'
}
```

Remember, layouts aren't required. Sometimes you need one, sometimes you don't, and sometimes you need more than one. You might even need sub-layouts or nested layouts! No worries, [we have you covered there too](http://assemble.io/docs/Layouts.html)!


#### Pages

> Pages, generally **structural in nature**, contain more HTML than textual content, and can be (optionally) wrapped with layouts.

A basic page might look something like this:

```handlebars
<div class="page-header">
  <h2 id="about">About Us</h2>
</div>

<div class="docs-section">
  <div class="page-header">
    <h2 id="team">Team</h2>
  </div>
  <!-- This markdown helper will include the content from `team.md`
  and convert it to HTML -->
  {{md 'team'}}
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>

<div class="docs-section">
  <div class="page-header">
    <h2 id="history">History</h2>
  </div>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>
```

**Pages configuration**

Pages are the "source files" in your configuration. Jump back up to the [usage section](#usage) for a basic example, or refer to [Grunt's documentation](http://gruntjs.com/configuring-tasks#files) to learn more about the vavious formats that can be used in the Gruntfile for defining source and dest files.

#### Partials

> Partials allow you to define a chunk of code one time and use it in multiple places.

Partials are often used for UI components such as buttons, navbars or modals. But they can also be used for any other snippets or sections of code that might be repeated across multiple pages, or for code that might otherwise be reusable in some way. Partials are easy to spot since they use a `>`, which is the special [Handlebars.js syntax](http://blog.teamtreehouse.com/handlebars-js-part-2-partials-and-helpers)) that is only used with partials: e.g. `{{> foo }}`.

Continuing with the `layout` example from above, to use a partial for the `head` section simply create a new file, such as `head.hbs` or whatever you prefer, then extract the code from the head section and add it to the new file:

```handlebars
<!-- `head.hbs` partial -->
<meta charset="UTF-8">
<title>{{title}}</title>
```

Before continuing on, ensure that the filepath to your newly created partial, `head.hbs`, is specified in your project's configuration so Assemble can take note of it, ensuring that the partial can be used in your templates.

Now, to actually use the partial, add the `{{> head }}` template to the `head` section of your layout where the code was removed. Assemble makes this simple by allowing you to use the name of the file you just created as the name of the partial:

```handlebars
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- The `>` means that this is a partial and its content
    will be inserted here. -->
    {{> head }}
  </head>
  <body>
    <!-- Remember that `{{> body }}` is used for inserting pages.
    this is the only `partial` name that is specially-reserved
    by Assemble -->
    {{> body }}
  </body>
</html>
```

**Partials configuration**

Before you can use partials in your templates, you need to tell Assemble where they are. You can do this by adding a `partials` property to the options.

Example:

```js
options: {
  // How you organize your project is your business. Assemble
  // just needs to know where your partials are and the file
  // extensions you'll be using.
  partials: ['templates/partials/*.hbs', 'templates/snippets/**/*.html']
}
```