const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'build'), { fallthrough: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/api", (req, res) => {
  res.json({ message: 'Connected to express' });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});