# Hatchways Back-End Assessment Preparation

## Project Description

This is Erica Ingram's submission for the back-end assessment from Hatchways.  The app is deployed at [this link](https://hatchways-betest.herokuapp.com/api).

## Features Done

- [X] new github repo
- [X] add dependencies
- [X] get to app starting point before hitting start
- [X] research/review old apps/samples
- [ ] Build an API that requires you to fetch data from [this API](https://hatchways.io/api/assessment/blog/posts).
    - query parameters:  tag; string (the tag associated with the blog post)
        - [example](https://hatchways.io/api/assessment/blog/posts?tag=tech)
    - Our API can only filter one tag at a time.  The field “tag” is singular, not plural.
- [ ] You need the following routes in your API:
    - [ ]  GET /api/ping, response status code 200, json response {"success": true}
    - [ ] GET /api/posts, response status code 200, response as follows:
        - query parameters:  tags, sortBy, direction
        - The API response will be a list of all the blog posts that have at least one tag specified in the tags parameter.
        - The sortBy parameter specifies which field should be used to sort the returned results. This is an optional parameter, with a default value of `id`.
        - The direction parameter specifies if the results should be returned in ascending order (if the value is "asc") or descending order (if the value is "desc"). The default value of the direction parameter is `asc`.
        - Response Body (JSON):
            ```pseudocode
            {
                "posts":
                    [
                        {
                            "id": 1,
                            "author": "Rylee Paul",
                            "authorId": 9,
                            "likes": 960,
                            "popularity": 0.13,
                            "reads": 50361,
                            "tags": [ "tech", "health" ]
                        },
                    ...
                    ]
            }
            ```
        - Error Responses:
            - If `tags` parameter is not present (response status code: 400):
                - Response body (JSON):
                ```pseudocode
                    {
                        "error": "Tags parameter is required"
                    }
                ```
            - If a `sortBy` or `direction` are invalid values, specify an error like below (response status code: 400):
                - Response body (JSON):
                ```pseudocode
                    {
                        "error": "sortBy parameter is invalid"
                    }
                ```
- [ ] For every tag specified in the tags parameter, fetch the posts with that tag using
the Hatchways API (make a separate API request for every tag specified)
- [ ] Combine all the results from the API requests above and remove all the repeated
posts (try to be efficient when doing this)
- [ ] You will get a better score on our assessment if you can make concurrent requests to the API (making the requests in parallel)
- [ ] An important part of development is testing. In this step, we want to see tests written for your routes. Do not use the solutions API route to perform testing in this step. Think about the different ways to test the app, and the best way to get good coverage.
- [ ] Making API calls to other servers can be expensive. How can you reduce the number of calls you make to a server? You can cache the results of an API call on your server. Try to implement a server side cache to our API. Two tips are 1) keep it simple, and 2) feel free to use existing libraries/frameworks.
- [ ] add appropriate comments
- [ ] make sure there are no console red/yellow errors
- [ ] make sure app organized, no repeated code, all code formatted
- [X] fill out readme template
- [ ] Cypress testing
- [ ] Postman testing & documentation (Postman collection link)
- [ ] deploy
- [ ] write instructions to deploy
- [ ] submit

We have provided an API with the correct solution. This should only be used to verify
your results. Do not call this API in your application. [Here it is in action](https://hatchways.io/api/assessment/solution/posts?tags=history,tech&sortBy=likes&direction=desc).

## Tech Stack

- [Node.js](https://github.com/nodejs/node):  a JavaScript runtime.
- [Knex](https://github.com/knex/knex):  a query builder for PostgreSQL, MySQL and SQLite3, designed to be flexible, portable, and fun to use.
- [Express](https://github.com/expressjs/express):  a fast, unopinionated, minimalist web framework for Node.
- [bcrypt](https://github.com/pyca/bcrypt/):  modern(-ish) password hashing for your software and your servers.
- [cypress](https://www.cypress.io):  Fast, easy and reliable testing for anything that runs in a browser.
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

Your submission takes into consideration how long it takes you to complete it. You are welcome to submit it at any point, however completing it in less than 12 hours increases your chances of being considered for our next interview cycle.

## Instructions to Start

There is no need to run this locally, as this app has been [deployed](https://hatchways-betest.herokuapp.com/api).  If you would like to run the Cypress tests on it, simply run ```yarn cypress open```.

The Postman collection contains examples of all get, post, and put endpoint body submissions AND responses as well as tests, so if you open that in Postman, you should be able to view all the endpoints in the way you want.  They are sorted into folders.  

You will need to log in to hit endpoints, and a login is provided in the Postman collection.  You may also register your own username and a JWT will be provided to you via the live app.  Take the token you receive from either logging in or registering and put it in the Postman collection as the value to the variable ```token```, which should already be in the collection.  This will make it easy for you to navigate the different endpoints.

To add your token to Postman, once you have the collection loaded in Postman, go to the gear icon in the top right next to the environment selection, select the environment you are going to use, and then paste your token in ```initial value``` and ```current value``` with the variable name ```token```.  Each endpoint in the collection is already configured to use this variable as a token, so after you've done that, you should be able to hit endpoints to your heart's content.

## Instructions to Deploy

- Use Heroku to deploy app.
- provision PostgreSQL database on Heroku.
- enter database url as ```DATABASE_URL``` in a local .env file and in config vars on Heroku.
- enter ```production``` as ```DB_ENV``` in a local .env file and in config vars on Heroku.
- The secret will be emailed for you to use as ```JWT_SECRET``` in a local .env file and in config vars on Heroku.
- Migrate and seed the database using the following commands:


    ```knex migrate:up authors.js;knex migrate:up tags.js;knex migrate:up posts.js;knex migrate:up poststags.js;knex migrate:up users.js;knex seed:run --specific=001-authors.js;knex seed:run --specific=002-posts.js;knex seed:run --specific=003-tags.js;knex seed:run --specific=004-poststags.js;```

- This might or might not be a useful command; it's just here to save you some typing:

```knex migrate:down users.js;knex migrate:down tags.js;knex migrate:down poststags.js;knex migrate:down posts.js;knex migrate:down authors.js;```

## Documentation

- This app has been documented via Postman.
- Postman Docs were last published on 08/18/2020.
- Postman docs contain examples of all get, post, and put endpoint body submissions AND responses.

[Postman Collection]()   |   [BASE URL](https://hatchways-betest.herokuapp.com/api)   |   [Schema](https://dbdesigner.page.link/VfzyA87X2LzAs5nA8)   |   [Documentation](https://documenter.getpostman.com/view/6401823/T1LQi78J?version=latest)   |   [Endpoints](endpoints.md)

## Testing

- All endpoints have been tested and documented via Cypress and Postman.
