
# Gulp Workflow - TypeScript, Sass, Production Optimization
![Gulp Workflow](gulp.jpg)

This is a workflow workflow that is able to compile TypeScript to javascript, Sass into CSS. BrowserSync create a local server for us and with it we watch for file changes. After file change is detected browser window is refreshed automatically. We can run this task with the `gulp` command in the command line.

We've also built a second task, build, that creates a dist folder for the production website. We compile TypeScript into javascript, Sass into CSS, minify all files, optimized all our assets, and copied the necessary folders into the dist folder. To run this task, we just have to type `gulp build` into the command line. This create a Production ready code.

* Spins up a web server
* Compiles TypeScript to JS
* Compiles Sass to CSS
* Using Autoprefixer to write vendor-free CSS code
* Refreshes the browser automatically whenever you save a file
* Optimizes all assets (CSS, JS, fonts, and images) for production
* Convert a set of svg's into a spritesheet and CSS variables via gulp


##Instructions

Make sure you have these installed

1. [Node.js](www.nodejs.org).
2. [git](www.git-scm.com).
3. Gulp via the Mac terminal or CMD on a PC > `npm install --global gulp-cli`
4. Yarn via the Mac terminal or CMD on a PC > `npm install -g yarn`

Clone this repository into your local machine using the terminal (mac) or Gitbash (PC)
`git clone https://github.com/drejcreative/Gulp-Workflow.git`

CD to the folder with workflows
Run > `yarn install` to install the project dependencies  
Run > `bower install` to install the bower dependencies if you have it  

Run the Gulp command > `gulp` to start a server  
Run the > `gulp build` to create a production ready code in dist folder
