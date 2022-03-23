### Setup Webpack

#### Just dumb setup
Initially I've moved all the code into an `src` folder.
Next I run 
```
yarn webpack --entry ./RxJs/src/index.html --mode development 
```

It throws some errors and it looks like WP can't just use an HTML as an entry point. If I'll change an entry point to `main.js` it'll work and the resulting file will be put to `../dist`.

However that's not exactly the thing I want, since what I want is to use `index.html` and let WP resolve all dependencies from there.
There's the manual how to implement this: https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin

But before researching into html plugin, let's see what happens when I use `main.js` as an entry.
The script there is extremely simple:

```
import * as helpers from './helpers.js';
import * as rxjs from 'rxjs';

console.log(`Hello ${helpers.YEAR}`);

let of$ = rxjs.of('rxjs');
of$.subscribe({
    next: x => console.log(`Hello from ${x}!`)
});
```

But the resulting file is huge - 106 Kb. Looks like it's the "shotgun" import from RxJs that does it - WP just imports everything.
Now let's import only one function: `import { of } from 'rxjs';`. Aaaand... nothing changes :( Could it be because of development mode? IDK. That's something to research, but now let's put it aside and deal with the entry points.


#### Use index.html as an entry point

To do this we need to install HtmlWebpackPlugin. Now we need the webpack config, since things are becoming complicated.

Now mind that since I have this particular project as a subfolder of an actual project (and it's not set up as a monorepo), I have to deal with different paths and stuff. So now my script looks like

``` bash
/Sandbox/JS
$ yarn webpack --config RxJs/webpack.config.js --mode development
```

Now we can `yarn http-server` and go to http://127.0.0.1:8080/RxJs/dist/ to see results.
Aaaand... it kinda sucks, because the main.js is still an entry point and index.html is totally regenerated, so that HTML i put in body disappears o_O 
Actually it seems that HtmlWebpackPlugin doesn't even need an index.html and will generate one instead.

What we can do is to set a `template` for HtmlWebpackPlugin - it can be a html file, and plugin will just inject a resulting js bundle into it's `head`