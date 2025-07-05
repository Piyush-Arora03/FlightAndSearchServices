# Flight And Search Service 

## Project Set-Up 
 - Clone project on your local
 - Execute `npm install` in the same path of root directory of the cloned project
 - Create a `.env` file in root directory and set up enviromental variable 
    - `PORT:3000`
 - Inside src/config create a `config.json` and add following piece of code 
    ```
    {
        "development": {
            "username": "<YOUR DB USERNAME>",
            "password": "<YOUR DB PASSWORD>",
            "database": "Flight_Search_Server_DB",
            "host": "127.0.0.1",
            "dialect": "mysql"
        }
    }

    ```
 - Once you are done with the above part , open terminal then go to src folder and execute 
    - `npx sequelize db:create`
