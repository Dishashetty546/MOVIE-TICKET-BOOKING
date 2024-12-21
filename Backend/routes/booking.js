const express = require("express");
const router = express.Router();
const bookingQueue = [];

router.post("/queue", (req, res) => {
  const booking = req.body;
  bookingQueue.push(booking);
  res.json({ message: "Added to queue", queuePosition: bookingQueue.length });
});

router.get("/queue", (req, res) => {
  res.json({ queue: bookingQueue });
});

module.exports = router;
