# Hatchways Back-End Assessment Preparation

## Project Description

This is Erica Ingram's submission for the back-end assessment from Hatchways.  The app is deployed at [this link](https://hatchways-betest.herokuapp.com/api).

## Documentation

- This app has been documented and tested via Postman.
- Postman docs were last published on 08/21/2020.
- Postman docs contain examples of all get, post, and put endpoint body submissions AND responses.
- Comments including the full SQL command for its corresponding knex function is included for the larger functions in each model, just for posterity or to show that I can do/did it.

[Postman Collection](https://www.postman.com/collections/7a82d732c439d431359c)   |   [BASE URL](https://hatchways-betest.herokuapp.com/api)   |   [Schema](https://dbdesigner.page.link/VfzyA87X2LzAs5nA8)   |   [Documentation](https://documenter.getpostman.com/view/6401823/T1LQi78J?version=latest)   |   [Endpoints](endpoints.md)

## Tech Stack

- [Node.js](https://github.com/nodejs/node):  a JavaScript runtime.
- [Knex](https://github.com/knex/knex):  a query builder for PostgreSQL, MySQL and SQLite3, designed to be flexible, portable, and fun to use.
- [Express](https://github.com/expressjs/express):  a fast, unopinionated, minimalist web framework for Node.
- [bcrypt](https://github.com/pyca/bcrypt/):  modern(-ish) password hashing for your software and your servers.
- [Postman](https://www.postman.com/):   Postman helps you be more efficient while working with APIs.  Using Postman, you can construct complex HTTP requests quickly, organize them in collections and share them with your co-workers.
- [PostgreSQL](https://github.com/postgres/postgres):  Open Source Relational Database

### Breakdown

- Creating a simple JSON API
- Fetching data from an API

## Rubric Requirements

### Correctness

- Passes all of our tests
- Shows great attention to detail
- Goes above and beyond the requirements, such as handling validation of improper inputs, or completing bonus requirements and stretch goals (like deploying an application).

### Code Organization, Readability & Maintainability

- Code utilizes a consistent design pattern.
- Code is well organized and would be easy to extend.
- Design made with consideration to potential future features.
- Code is easy to read - proper indentation, vertical spacing, named constants (no magic numbers), big picture comments, and meaningful variable names.
- You can investigate using a linter to help make your code properly formatted.
- There are small amounts of repeated code, and is well factored into functions.
- Related items are grouped into classes (or something equivalent like structs or objects).

### Code Performance - Efficiency, Data Structures, and Algorithms

- Code that is performant (has a good time and space complexity for the problem given).
- Avoids unnecessary nested for loops and uses the appropriate data structures and algorithms.
- Efficient code that reduces unnecessary code.
- Implements additional features to improve code performance such as (but not limited to) caching, parallel API requests, reducing re-rendering on the front-end, memoization, and other code performance techniques.

### Best Practices & Proficiency in Language/Framework

- Utilizes great programming practices such proper unit testing, reduced warnings, and defensive coding strategies (validation, asserts).
- Demonstrate a good grasp of the language and/or framework. Avoids major anti-patterns in the project (using let vs. const in Javascript, modifying the DOM in React, etc.)
- Utilizes the most advanced features in the framework (for example using functional components, Hooks in React).

### Completion Speed

- A fast completion time. This category is the least important category, so prioritize it the least. We will consider speed with respect to the complexity of your solution. You will receive a low mark in completion if you completed the application slowly and your solution is not complex.

## About the Assessment

In this assessment, you will write a simple backend JSON API.  If you notice something is not working (like the API, or any of the links in this document), please contact hello@hatchways.io.  You may use any type of backend API framework. Please document in a Readme how to start the application.  Your assessment will be graded based on [this rubric](https://drive.google.com/file/d/1f0jiSVTTGtAn8XbHwHcTqPEU-BT4-q6x/view).

Your submission takes into consideration how long it takes you to complete it. You are welcome to submit it at any point, however completing it in less than 24 hours increases your chances of being considered for our next interview cycle.

We have provided an API with the correct solution. This should only be used to verify
your results. Do not call this API in your application. [Here it is in action](https://hatchways.io/api/assessment/solution/posts?tags=history,tech&sortBy=likes&direction=desc).

## Instructions to Start

There is no need to run this locally, as this app has been [deployed](https://hatchways-betest.herokuapp.com/api).  The [Postman Collection](https://www.postman.com/collections/7a82d732c439d431359c) may be found [here](https://www.postman.com/collections/7a82d732c439d431359c), so there is no set-up required on your part whatsoever.  See link to documentation below.

The Postman collection contains examples of all get, post, and put endpoint body submissions AND responses as well as tests, so if you open the Postman collection, you should be able to view and use all the endpoints.  They are sorted into folders.

You will need to log in to hit endpoints, and a login is provided in the Postman collection and in the email I sent about this.  You may also register your own username and a JWT will be provided to you via the live app.  Take the token you receive from either logging in or registering and put it in the Postman collection as the value to the variable ```token```, which should already be in the collection.  This will make it easy for you to navigate the different endpoints.

To add your token to Postman, once you have the collection loaded in Postman, go to the gear icon in the top right next to the environment selection, select the environment you are going to use, and then paste your token in ```initial value``` and ```current value``` with the variable name ```token```.  Each endpoint in the collection is already configured to use this variable as a token, so after you've done that, you should be able to hit endpoints to your heart's content.

## Instructions to Deploy

- Use Heroku to deploy app.
- Provision PostgreSQL database on Heroku.
- enter database url as ```DATABASE_URL``` in a local .env file and in config vars on Heroku.
- enter ```production``` as ```DB_ENV``` in a local .env file and in config vars on Heroku.
- The secret will be emailed for you to use as ```JWT_SECRET``` in a local .env file and in config vars on Heroku.
- Migrate and seed the database using the following commands:


    ```knex migrate:up users.js;knex migrate:up authors.js;knex migrate:up tags.js;knex migrate:up posts.js;knex migrate:up poststags.js;knex seed:run --specific=001-authors.js;knex seed:run --specific=002-posts.js;knex seed:run --specific=003-tags.js;knex seed:run --specific=004-poststags.js;```

- These probably aren't useful commands; they're just here to save you some typing.

```knex migrate:down users.js;knex migrate:down poststags.js;knex migrate:down posts.js;knex migrate:down tags.js;knex migrate:down authors.js;```

## Testing

- All endpoints have been tested and documented via Postman.
