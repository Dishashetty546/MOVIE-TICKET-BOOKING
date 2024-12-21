# Movie Ticket Booking System

This project implements a Movie Ticket Booking System using Node.js. It handles movie listings, booking queues, sorting movies based on popularity, and displaying seating arrangements. The system consists of the following sessions:

- **Session 1 - Strings and Arrays**: Store movie titles, showtimes, and seating arrangements.
- **Session 2 - Queues**: Manage ticket bookings for popular shows.
- **Session 3 - Sorting**: Sort movies based on popularity.
- **Session 4 - Graphs**: Visualize seating arrangements.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/movie-ticket-booking-system.git
   ```

2. Navigate to the project directory:

   ```bash
   cd movie-ticket-booking-system
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`.

## API Documentation

### **Session 1 - Strings and Arrays**

#### 1. **Get All Movies**

- **Endpoint**: `GET /movies`
- **Description**: Fetch a list of all movies with showtimes and seating arrangements.
- **Response**:
  ```json
  [
    {
      "id": 1,
      "title": "Movie A",
      "showtimes": ["12:00 PM", "3:00 PM", "6:00 PM"],
      "seating": [
        ["A1", "A2", "A3"],
        ["B1", "B2", "B3"],
        ["C1", "C2", "C3"]
      ]
    }
  ]
  ```

#### 2. **Add a Movie**

- **Endpoint**: `POST /movies`
- **Description**: Add a new movie with showtimes and seating.
- **Request Body**:
  ```json
  {
    "id": 2,
    "title": "Movie B",
    "showtimes": ["1:00 PM", "4:00 PM", "7:00 PM"],
    "seating": [
      ["A1", "A2", "A3", "A4"],
      ["B1", "B2", "B3", "B4"]
    ]
  }
  ```
- **Response**:
  ```json
  {
    "message": "Movie added!"
  }
  ```

### **Session 2 - Queues**

#### 1. **Add to Booking Queue**

- **Endpoint**: `POST /bookings/queue`
- **Description**: Add a booking request to the queue.
- **Request Body**:
  ```json
  {
    "movieId": 1,
    "customerName": "John Doe",
    "showtime": "12:00 PM",
    "seats": ["A1", "A2"]
  }
  ```
- **Response**:
  ```json
  {
    "message": "Added to queue",
    "queuePosition": 1
  }
  ```

#### 2. **View Booking Queue**

- **Endpoint**: `GET /bookings/queue`
- **Description**: Get the current queue of bookings.
- **Response**:
  ```json
  {
    "queue": [
      {
        "movieId": 1,
        "customerName": "John Doe",
        "showtime": "12:00 PM",
        "seats": ["A1", "A2"]
      }
    ]
  }
  ```

### **Session 3 - Sorting**

#### 1. **Sort Movies by Popularity**

- **Endpoint**: `GET /movies/sort`
- **Description**: Sort movies based on their popularity.
- **Response**:
  ```json
  [
    {
      "id": 1,
      "title": "Movie A",
      "showtimes": ["12:00 PM", "3:00 PM", "6:00 PM"],
      "seating": [
        ["A1", "A2", "A3"],
        ["B1", "B2", "B3"],
        ["C1", "C2", "C3"]
      ]
    },
    {
      "id": 2,
      "title": "Movie B",
      "showtimes": ["1:00 PM", "4:00 PM", "7:00 PM"],
      "seating": [
        ["A1", "A2", "A3", "A4"],
        ["B1", "B2", "B3", "B4"]
      ],
      "popularity": 90
    }
  ]
  ```

### **Session 4 - Graphs**

#### 1. **View Movie Seating**

- **Endpoint**: `GET /movies/:movieId/seating`
- **Description**: Visualize the seating arrangement for a movie.
- **Response**:
  ```html
  <pre>
  A1 A2 A3
  B1 B2 B3
  C1 C2 C3
  </pre>
  ```

---

### Description of the folders and files:

- **`models/`**: Contains all the data models for the application.

  - **`movies.js`**: Defines the structure of movie objects, showtimes, and seating arrangements.

- **`routes/`**: Contains route files for handling different endpoints.

  - **`movies.js`**: Contains routes related to managing movies (GET, POST, etc.).
  - **`bookings.js`**: Contains routes for managing bookings and queues.

- **`app.js`**: The entry point for the application. It sets up the Express server and middleware.

- **`package.json`**: Defines project dependencies, scripts, and other configurations for npm.

- **`README.md`**: Project documentation explaining how to use and set up the project.

## Technologies Used

- **Node.js**: Backend framework
- **Express.js**: Web framework for Node.js
- **JavaScript**: Programming language
- **JSON**: Data format for API communication

## Future Improvements

- Implement user authentication for booking and queue management.
- Integrate payment gateway for ticket purchase.
- Add real-time updates for available seats using WebSockets.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
