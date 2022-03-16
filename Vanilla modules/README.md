### Run the code
```
yarn http-server
```

Then open http://localhost:8080/Vanilla%20modules/index.html

Alternatively you can start http-server in a `Vanilla modules` folder, but in that case requests to folders outside of it won't work.

### Basic modules

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

### NPM modules

Now I'm going to install RxJs from NPM and use it in my scripts. The issue to solve is that simple `export` doesn't resolve node_modules - so I have either use Webpack or... let's see...

Okay, so I've tried to reference `import * as rxjs from '../node_modules/rxjs/dist/esm5/index.js'` and it does work, but inside said `index.js` imports don't have file extensions, so it doesn't work. I have to figure out what's the expected way to consume it. Webpack again?

As an alternative I can try to load RxJs from a CDN or a compiled script - not as a module, just like in good old times.

The example of how to use rxjs this way can be found in their readme, in my case it looks like
```
const { of } = rxjs;

let of$ = of('rxjs');
of$.subscribe({
    next: x => console.log(`Hello from ${x}!`)
});
```

The downside here is that VS Code doesn't provide any hints nor autocomplete. That's not good, but, well, it still works.