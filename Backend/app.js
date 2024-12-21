const express = require("express");
const bodyParser = require("body-parser");
const moviesRoutes = require("./routes/movies");
const bookingsRoutes = require("./routes/booking");

const app = express();
app.use(bodyParser.json());
app.use("/movies", moviesRoutes);

app.use("/bookings", bookingsRoutes);

app.listen(3001, () => console.log("Server running on port 3000"));
