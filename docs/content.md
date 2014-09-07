
> Content is usually written in an easy-to-read plain text format such as markdown

Converting markdown to HTML with Assemble is simple.

To include external markdown files and have them converted to HTML at build time, you can use the `md` helper:

```html
<h1>My Blog Post</h1>
{{md 'foo/bar.md'}}
```

Or you can wrap sections of markdown with the `markdown` block helper:

```handlebars
<!-- anything in this block will be converted to HTML -->
{{#markdown}}
# My Blog Post

> This is my first blog post!

Whoo hoo!
{{/markdown}}
```

Using helpers to process markdown allows users to write HTML or markdown, or both together. It also keeps things simple while giving you the freedom to convert your content to HTML according to your preferences:

* Convert 1-to-1 into HTML pages, e.g. `about.md` would convert to `about.html` (or `about/index.html` using [permalinks](https://github.com/assemble/assemble-contrib-permalinks))
* Insert into other pages (as includes)
* Concatenate several content files together before converting to pages or being inserted into pages. The [assemble.io/helpers/](http://assemble.io/helpers/) documentation page is a good example of this. The sections on this page were each created from an individual markdown file. In total, _Assemble seamlessly combines more than [100 individual markdown files][helpers] to construct this page!_.
