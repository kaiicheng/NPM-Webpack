# NPM-Webpack

This is a project to learn NPM and Webpack.
NPM is a management tool.
Webpack has core function (Module Bundler) and elaborate function (Module Builder).

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

