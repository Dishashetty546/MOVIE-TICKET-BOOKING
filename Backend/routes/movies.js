const express = require("express");
const fs = require("fs");
const router = express.Router();
const movieDataPath = "./data/movies.json";
const { visualizeSeating } = require("./utils");

router.get("/", (req, res) => {
  const movies = JSON.parse(fs.readFileSync(movieDataPath, "utf-8"));
  res.json(movies);
});

router.post("/", (req, res) => {
  const movies = JSON.parse(fs.readFileSync(movieDataPath, "utf-8"));
  const newMovie = req.body;
  movies.push(newMovie);
  fs.writeFileSync(movieDataPath, JSON.stringify(movies));
  res.status(201).json({ message: "Movie added!" });
});

router.get("/sort", (req, res) => {
  const movies = JSON.parse(fs.readFileSync(movieDataPath, "utf-8"));
  const sortedMovies = movies.sort((a, b) => b.popularity - a.popularity);
  res.json(sortedMovies);
});

router.get("/:id/seating", (req, res) => {
  const movies = JSON.parse(fs.readFileSync(movieDataPath, "utf-8"));
  const movie = movies.find((m) => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).json({ message: "Movie not found" });

  const seatingChart = visualizeSeating(movie.seating);
  res.send(`<pre>${seatingChart}</pre>`);
});

module.exports = router;
