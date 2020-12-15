# How to setup local DB and basic api #

## 1. How to set up yarn ##
## (If “nvm command not found” appeared on your terminal) ##

### ->use nodebrew ###
https://github.com/hokaccha/nodebrew

### Install nodebrew ###
$ curl -L git.io/nodebrew | perl - setup
$ export PATH=$HOME/.nodebrew/current/bin:$PATH
$ source ~/.bashrc

### If “No such file or directory” ###
$ cd ~
$ vi .bashrc
(Vim terminal will be opened. Type “:w”, then type “ZZ”)
$  source ~/.bashrc
$ nodebrew help

### ->change node version ###
nodebrew install v10.14.2
nodebrew use v10.14.2
node -v

### If “not changed” ###
1. Open “.bashrc”file in home directory

2. Then, add following path:
export PATH=$HOME/.nodebrew/current/bin:$PATH

3. $ source ~/.bashrc
4. $ nodebrew use v10.14.2
5.  $node -v (If you see right version of node, it’s OK)

## 2.How to set up Database on local ##

1. Login psql
2. $ CREATE DATABASE tron;
3. Back to the terminal
4. $ yarn add pg
5. $ yarn add knex
6. $ yarn knex init
7. Change client, user name and password in knex.js file 
8. yarn knex migrate:latest
9. yarn run knex seed:run

(knexfile.js setting example)
  development: {
    client: 'postgresql',
    connection: {
      database: 'tron',
      user:     'Yuta',
      password: ''
    }
  },

## 3.How to activate api ##
1. $ yarn add morgan
2. $ yarn add path
3. $ yarn add body-parser
4. $ yarn add cars
5. $ yarn add nodemon
6. $ yarn add express
7. $ yarn add dotenv
8. Create “.env” in directory ()
9. $ nodemon server

.env file (write following codes in .env file)*adjust DATABASE_URL
NODE_ENV=development
DATABASE_URL=postgresql://Yuta@localhost:5432/tron





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
