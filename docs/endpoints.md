
# Endpoints

queries for authors:

- bio (case insensitive)
- firstname (case insensitive)
- lastname (case insensitive)
- sortBy (firstname, lastname, id) (case sensitive)
- direction (asc/desc) (case sensitive)

queries for posts:

- tags (case insensitive)
- sortBy (author, authorId, likes, reads, id) (case sensitive)
- direction (asc/desc) (case sensitive)

available tags:

- culture
- design
- health
- history
- politics
- science
- startups
- tech

## Login / Registration

| Request Method | Endpoint         | Description                          |
| :------------- | :--------------- | :----------------------------------- |
| `POST`         | `/login`         | Logs user in and returns a token     |
| `POST`         | `/register`      | creates a user                       |

## Users

| Request Method | Endpoint                   | Description                          |
| :------------- | :------------------------- | :----------------------------------- |
| `POST`         | `/users/`                  | creates a user                       |
| `PUT`          | `/users/:usersid`          | updates a user                       |
| `DELETE`       | `/users/:usersid`          | deletes a user                       |
| `GET`          | `/users`                   | returns list of users                |
| `GET`          | `/users/:usersid`          | returns a user                       |

## Authors

| Request Method | Endpoint                   | Description                          |
| :------------- | :------------------------- | :----------------------------------- |
| `POST`         | `/authors/`                | creates an author                    |
| `PUT`          | `/authors/:authorsid`      | updates an author                    |
| `DELETE`       | `/authors/:authorsid`      | deletes an author                    |
| `GET`          | `/authors`                 | returns list of authors              |

## Posts

| Request Method | Endpoint                   | Description                          |
| :------------- | :------------------------- | :----------------------------------- |
| `POST`         | `/posts/`                  | creates a post                       |
| `PUT`          | `/posts/:postsid`          | updates a post                       |
| `DELETE`       | `/posts/:postsid`          | deletes a post                       |
| `GET`          | `/posts`                   | returns list of posts                |

## Tags

| Request Method | Endpoint                   | Description                          |
| :------------- | :------------------------- | :----------------------------------- |
| `POST`         | `/tags/`                   | creates a tag                        |
| `PUT`          | `/tags/:tagsid`            | updates a tag                        |
| `DELETE`       | `/tags/:tagsid`            | deletes a tag                        |
| `GET`          | `/tags`                    | returns list of tags                 |

## PostsTags

| Request Method | Endpoint                   | Description                          |
| :------------- | :------------------------- | :----------------------------------- |
| `POST`         | `/poststags/`              | links a post to a tag                |
| `PUT`          | `/poststags/:poststagsid`  | updates a post-tag link              |
| `DELETE`       | `/poststags/:poststagsid`  | deletes a post-tag link              |
| `GET`          | `/poststags`               | returns list of post-tag links       |

## Popularity, Likes, and Reads

| Request Method | Endpoint                   | Description                          |
| :------------- | :------------------------- | :----------------------------------- |
| `GET`          | `/popular`                 | returns list of most popular posts   |
