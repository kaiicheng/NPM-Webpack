# NPM-Webpack

This is a project to learn NPM and Webpack.

NPM is a management tool.

Webpack has core function (Module Bundler) and elaborate function (Module Builder).

Why webpack?
* Core function: support modular (export/import)
* Elaborate function: support the compiling and loarding of special syntax (React JSX)

Run below commands in terminal.

* Check npm
```
npm
```

* Initialize a new project to create a package.json file (descriptive file for the project)
```
npm init -y
```

* Download executing package and add dependencies in package.json file (package-lock.json has nore detailed description)
Package downloaded will be placed under node_modules folder
```
npm install "package name" --save
```
Example
```
npm install react --save
```

* Download developing package and add devDependencies in package.json file
Package downloaded will be placed under node_modules folder
```
npm install "package name" --save-dev
```
Example
```
npm install webpack --save-dev
```

* Update package
```
npm update "package name"
```

* Uninstall developing package
```
npm uninstall "package name"
```
Example
```
npm uninstall react
```

* Add -g at the end for commands to execute globally
Global package downloaded will not be shown under node_modules folder
Example
```
npm install mocha -g
```

```
npm uninstall mocha -g
```

# Webpack

* Step 1:
Download webpack and webpack command line interface (cli)
```
npm install webpack webpack-cli --save-dev
```

* Step 2:
Create dist and src folders under NPM-Webpack

* Step 3:
Create a index.js file under src folder

* Step 4:
Build bundle and then create main.js file under dist folder
```
npm run build
```

* Step 5:
Create a index.html file which contains codes from main.js under dist folder

* Step 6:
Check website by opening index.html file

# Update code
* Step 1
Create bundle with the code in index.js under src folder to update main.js file under dist folder
```
npm run build
```