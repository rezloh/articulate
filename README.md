# Articulate
###### A simple fullstack MERN app.

### Overview
This project began as a one-day code challenge. The requirements were:

1. Using RESTful architecture, build a Node.js/Express server that has endpoints for creating, updating, deleting, and retrieving articles.
2. Persist the article data using MongoDB.
3. Develop a frontend to interact with the backend articles API.

### Technologies
* React 15.5.4
* Redux 3.6.0
* React Router 4.1.1
* Axios 0.16.1
* Node.js 6.9.2
* Express 4.15.2
* MongoDB 3.4.2
* Mongoose 4.9.8
* Webpack 2.5.1

### Using this Repo
Fork and clone the repo, then install dependencies:
```javascript
npm install
```

In a separate shell window, start MongoDB:
```javascript
mongod
```

This app uses the npm-run-all package to allow Webpack to watch the client files and nodemon to watch the server files. To start both of these processes:
```javascript
npm start
```

### Next Steps

* Use a CSS preprocessor like SASS for styles.
* Rebuild the frontend using Angular 2 or Angular 4.
* Create a version that uses mySQL rather than Mongo.
* Implement user authentication.

