# S webapp generator

This is yeoman generator for creating single page web application, using PhantomJS, Express.js, Backbone.js and Node - lets you quickly set up a project following best practices.

## Usage

Install `yo`, `gulp-cli` and `generator-s-webapp`: 

```
npm install -g yo gulp-cli generator-s-webapp
```

Run `yo s-webapp`

```
yo s-webapp
```

## Directory Layout

Before you start, take a moment to see how the project structure looks like:

```
.
├── /app/
│   ├── /client/
│   │   ├── /Components/
│   │   ├── /core/
│   │   ├── /fonts/
│   │   ├── /images/
│   │   ├── /libs/
│   │   └── /models/
│		└── /server/
│       ├── /auth/
│       ├── /config/
│       ├── /controllers/
│       ├── /views/
│       ├── /app.js
│       └── /routers.js
├── /gulp/
├── /node_modules/
├── /circle.yml
├── /gulpfile.js
├── /package.json
└── /README.md
```
## Running

You can start your new app by running `gulp serve`. 

```
gulp serve
```

Once the `serve` tasks are complete, a browser tab should be opened to your new app server.

##  Build

Run `gulp build`. This will build your project into the dist folder by default.

```
gulp build
```

