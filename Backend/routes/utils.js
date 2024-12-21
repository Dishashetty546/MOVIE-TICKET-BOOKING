const visualizeSeating = (seating) => {
  return seating.map((row) => row.join(" ")).join("\n");
};

module.exports = { visualizeSeating };
