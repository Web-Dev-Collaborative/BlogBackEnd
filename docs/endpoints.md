
# Endpoints

## Login / Registration

| Request Method | Endpoint         | Description                          |
| :------------- | :--------------- | :----------------------------------- |
| `POST`         | `/login`         | Logs user in and returns a token     |
| `POST`         | `/register`      | creates a user                       |

## Users

| Request Method | Endpoint                           | Description                          |
| :------------- | :--------------------------------- | :----------------------------------- |
| `POST`         | `/customers/`                      | creates a user                       |
| `PUT`          | `/customers/:customersid`          | updates a user                       |
| `DELETE`       | `/customers/:customersid`          | deletes a user                       |
| `GET`          | `/customers`                       | returns list of users                |
| `GET`          | `/customers/:customersid`          | returns a user                       |
