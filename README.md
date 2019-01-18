# React app template

The template is to speed up the start of the development process by skipping default configurations of the app, such as:
- Webpack
- Redux stores
- CSS Modules
- Folder structure
- API DAO
- etc.

## Dependencies

This project uses React (v16.7.0) + Redux (v4.0.1) + React Router (v4.3.1) and Webpack 4 for compilation.

All dependencies are already included in ```package.json```

To install run:
```
npm install
```

## Included packages

This configuration has following convenience packages:
- react-responsive - Change DOM on media queries
- downshift - Advanced and accessible dropdown by PayPal
- lodash
- immutable
- redux-form
- redux-thunk

## Folder structer
```
|-- config
|   |-- webpack.base.config.js
|   |-- webpack.opt.config.js
|   `-- webpack.prod.config.js
|-- server
|   |-- index.js
|   `-- routes.js
|-- src
|   |-- assets
|   |-- dao
|   |   |-- AuthDAO.js
|   |   |-- BaseDAO.js
|   |   |-- ProfileDAO.js
|   |   `-- RestResource.js
|   |-- models
        |-- User.js
|   |-- react
|   |   |-- hoc
|   |   |-- layouts
|   |   `-- routes
|   |-- redux
|   |   |-- middleware
|   |   |-- modules
|   |   `-- configureStore.js
|   |-- services
|   |   `-- AuthService.js
|   |-- styles
|   |   |-- grid.scss
|   |   `-- index.scss
|   |-- index.html
|   |-- index.js
|   `-- router.js
|-- Dockerfile
|-- README.md
|-- package-lock.json
`-- package.json
```

As there are no strict rules about making a structure for React apps, this configuration proposes the following:

- assets - All images, fonts and other assets live here
- dao - All API related classes live here (Add another folder level if you need to separate, i.e. api/ and graphql/)
- models - It is extremely useful to have your plain JSON data wrapped in models with some conveinece methods. All models live here
- react - All layout, route and high-order (hoc) components live here
- redux - All redux-related files, such as configuration, modules (actions + reducer + actionTypes) live here
- services - All service classes live here
- styles - All global and re-usable SCSS/CSS live here.

## UI Framework
Despite that this setup does not incorporate any frameworks such as Bootstrap, Material or others, feel free to add the framework of your choice if you need.

Current setup has CSS Modules support, while it has global CSS support:
- src/react - Local styles (CSS Modules enabled)
- src/styles - Global styles, imports from npm, GUI components, etc.

[Flexboxgrid](http://flexboxgrid.com/) was chosen as grid system.

You can modify the grid variables in ```src/styles/grid.scss```

## Development
Clone this repository and remove ```.git``` directory before using:
```
rm -rf .git
```

Add your own git repository by issuing:
```
git init
git add .
git commit -am 'Initial commit'
git remote add origin git@github.com:USERNAME/REPOSITORY.git
```

To start the development server run:
```
npm start
```

## Production
Run in terminal:

```
npm start:prod
```

This command will build the project by using pre- hook:
```
npm prestart:prod
```

And then the compiled frontend will be served on http://localhost:3000 or any other port specified by ```PORT``` environment variable.

## Deployment
A default setup for Docker-based deployment is included.
Check out ```Dockerfile``` to learn more.
