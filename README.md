# test-mobility

This project uses Gulp for task automation and Bootstrap for responsive design. The goal of the project is to create a template for a quick start using modern development tools.

## Вимоги

Before starting work, make sure that you have installed:

- [Node.js and npm](https://nodejs.org/) (version 22.11.0 or above)
- Gulp CLI (`npm install --global gulp-cli`)

## Installing

1. Clone repository:
   ```bash
   git clone https://github.com/RostislavSagaydakov/test-mobility
   
2. Install npm package. Go to project folder
   ```bash
   cd your-project
   npm i
   
3. Basics
   ```bash
   gulp build //for production build (minify js,css,images)
   gulp watch //watching file changes(for dev)

3. Folder structure
 ```bash
    src/ — output files
        images/ — output images
        scss/ — styles SCSS
        js/ — JavaScript files
    dist/ — compiled files
        css/ — compiled css files
        js/ — compiled JavaScript files
        images/ - saved images
