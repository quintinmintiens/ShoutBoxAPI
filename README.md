# Shoutbox API
## Student Info

* First Name: Quintin

* Name : Mintiens

* Class : G2B4

## API
To start this API, create a `.env` file in the root of this folder with this content

```
NODE_ENV="development"
DATABASE_USERNAME="root"
DATABASE_PASSWORD=""
JWT_Secret=""
```

Update the username and password with the credentials of your local database.

You can also extend the .env file with these configurations, only if the database host/port are different than our default.

```
DATABASE_HOST="localhost"
DATABASE_PORT=3306
```

## How to start

Run the app with `yarn start`.

## Common errors

* Modules not found errors, try this and run again:

```
yarn install
```

* Migrations failed, try dropping the existing `shoutboxapi` database and run again


* Others: Google is your friend

## Online

You can find this API online at: https://shoutboxapi.herokuapp.com/

The Database for this online API is hosted on https://remotemysql.com/



## Contact

Quintin Mintiens - quintin.mintiens@student.hogent.be

