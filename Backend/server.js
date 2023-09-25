const express = require("express");
const body_parser = require("body-parser");
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const path = require("path")

const app = express();
app.use(body_parser.urlencoded({ extended: true }));
dotenv.config();
connectDB();
app.use(express.json());

app.use("/api/users", userRoutes)
app.use("/api/notes", noteRoutes)

// --------------------------deployment------------------------------
// __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    // res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// --------------------------deployment------------------------------

// Error Handling middlewares

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log(`Server is running on PORT ${PORT}`);
});