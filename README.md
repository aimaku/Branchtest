# Brunch app
Instructions for my first Brunch app :-)

This is HTML5 application, built with [Brunch](http://brunch.io).

## Getting started
* Install dependencies (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X or `cinst install node` on Win
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * [Bower](http://bower.io): `npm install -g bower`
    * [Scaffolt](https://github.com/paulmillr/scaffolt): `npm install -g scaffolt`
* Om du ska skapa ett nytt repo:
    * Skapa en ny mapp där du vill ha projektet, gå in i den mappen
    * Använd mallen genom att skriva `brunch new git@github.com:remotex/remotex-web-template.git`
    * Ändra name i bower.json och package.json till appnamnet
    * Byt innehåll i README.md
    * Skapa ett repo i mappen och gör första commiten! (`git init`, `git remote add origin git@github.com:remotex/<repository>`, `git push -u origin master`)
    * Add template as remote `git remote add template https://github.com/remotex/remotex-web-template`
* Om du ska uppgradera ett existerande repo:
    * Clone with `git clone git@github.com:remotex/<repository>`
    * Install node dependencies `npm install`
    * Install bower dependencies `bower install`
    * Add template as remote `git remote add template https://github.com/remotex/remotex-web-template`
* Om du ska uppdatera ett repos template:
    * Update node dependencies `npm update`
    * Update bower dependencies `bower update`, might also require `bower cache clear` before
    * Update template `git pull template master`. DO NOT REBASE!
* Run:
    * `npm start` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history) (This currently cannot access api, for some reason. Use nginx instead).
    * `brunch build --production` — builds minified project for production
    * Config nginx to have location root in repo/public
* Test:
    * Run `npm start` to watch and rebuild the files
    * Run `npm test` to run the tests for the project
* Develop:
    * To create a new view use `scaffolt view {{name}}` this will create the necessary files for your work
    * You can create more generators by placing them in the generators directory. Look at the view generator for inspiration, or the scaffolt project.
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io), [Chaplin site](http://chaplinjs.org)
    
