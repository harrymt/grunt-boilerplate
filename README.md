
## Initial setup for grunt projects
1. Launch Github's automatic page generator
2. Clone this repo
3. (optional) Add a CNAME file containing a domain name, and point the domain nameservers to GitHub, then you can navigate to that domain and see the website.


## Edit

- Look into the `/parts` directory for a basic templating setup.
- The `.html` files inside of the `/parts` directory get built into `build.html` then again minified into `index.html`.



## Technologies
 * [Font Awesome 4.3.0](https://fortawesome.github.io/Font-Awesome/)
 * [grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin) - To Minify HTML
 * [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat) - To concatenate JS
 * [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) - To Minify & Obfuscate JS
 * [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass) - Process Sass files
 * [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) - On file update, do task(s)
 * [grunt-serve](https://www.npmjs.com/package/grunt-serve) - Local server
 * [grunt-processhtml](https://github.com/dciccale/grunt-processhtml) - Optional: Optimizes site by inlining CSS & JS files into the HTML // "grunt-processhtml": "^0.3.8",
 * Optional: Heroku config for travis CI
