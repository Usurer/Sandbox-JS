This is a simple example of a how modular system works in vanilla JS.

First thing I do is simply defining `export ...` in helpers.js and importing it into main.js as `import * as x from './helpers'
However it doesn't work and I get a following error: 
> Uncaught SyntaxError: Cannot use import statement outside a module
That happens because the "root" module - main.js in our case - should be registered as a modular script on the html page.
```
<script type="module">
    import * as main from './main.js';
</script>
```

There is a downside - module is CORS-protected and won't be loaded without a server - i.e. just opening an html file in a browser won't work, we have to serve it. But we can use `http-server` npm package - either by installing it or by using it via npx: `npx http-server [path] [options]`.

So now we have the basics - main.js is added to index.html as a module, helpers.js is imported into main.js and index.html is served via simple http server.