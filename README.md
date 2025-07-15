# Flights And Search Service

A microservice for handling CRUD operations for flights, airports, airplanes, and cities using Node.js, Express, and Sequelize ORM.


## Features

- CRUD operations for Flights, Airports, Airplanes, and Cities
- Filtering flights by price, airports, etc.
- Sequelize ORM with MySQL
- Modular code structure

## Project Structure

```
FlightsAndSearch/
├── .env
├── package.json
├── README.md
├── src/
│   ├── index.js
│   ├── config/
│   │   ├── config.json
│   │   └── ServerConfig
│   ├── controllers/
│   ├── middleware/
│   ├── migrations/
│   ├── models/
│   ├── repository/
│   ├── routes/
│   ├── seeders/
│   ├── services/
│   └── utils/
```

## Prerequisites

- Node.js (v16 or above recommended)
- npm (v8 or above)
- MySQL Server

## Setup Instructions

1. **Clone the Repository**

   ```sh
   git clone https://github.com/Piyush-Arora03/FlightAndSearchServices.git
   cd FlightsAndSearch
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root directory:

   ```
   PORT=3000
   ```

4. **Database Configuration**

   - Go to `src/config/config.json`.
   - Add your MySQL credentials under the `development` section:

     ```json
     {
       "development": {
         "username": "<YOUR_DB_USERNAME>",
         "password": "<YOUR_DB_PASSWORD>",
         "database": "Flight_Search_Server_DB",
         "host": "127.0.0.1",
         "dialect": "mysql"
       }
     }
     ```

5. **Create the Database**

   ```sh
   npx sequelize db:create
   ```

6. **Run Migrations**

   ```sh
   npx sequelize db:migrate
   ```

7. **Seed Initial Data (Optional)**

   ```sh
   npx sequelize db:seed:all
   ```

## Running the Project

Start the server:

```sh
npm start
```

The API will be available at `http://localhost:3000/api/v1/`.

## API Endpoints

### City

- `POST /api/v1/city` - Create a city
- `GET /api/v1/city/:id` - Get city by ID
- `GET /api/v1/city` - Get all cities (supports filtering by name)
- `PATCH /api/v1/city/:id` - Update city
- `DELETE /api/v1/city/:id` - Delete city

### Airport

- `POST /api/v1/airport` - Create an airport

### Flight

- `POST /api/v1/flight` - Create a flight
- `GET /api/v1/flight` - Get all flights (supports filtering by price, airports, etc.)

## Seeding Data

- Airplanes: See [`src/seeders/20250709200546-add_airplanes.js`](src/seeders/20250709200546-add_airplanes.js)
- Airports: See [`src/seeders/20250708181600-add_airport.js`](src/seeders/20250708181600-add_airport.js)

To run all seeders:

```sh
npx sequelize db:seed:all
```

## Troubleshooting

- Ensure MySQL server is running and credentials are correct.
- If you get migration errors, check your `config.json` and `.env` formatting.
- For any issues, check logs in the terminal for error messages.

---

## License

ISC

---

## Author

Piyush Arora
