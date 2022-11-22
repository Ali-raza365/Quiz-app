const express = require("express");
const router = express.Router();

// import
const DBConnection = require("../../database/DBConnection");
const auth = require("./auth");
const quizzer = require("./quizzer");
const quiz = require("./quiz");

// {base API URL}
const api_uri = process.env.API_URI;

router.get("/", (req, res) => {
  res.send("Hello to QuizDen Backend System");
});

// connect to database
DBConnection.dbconnect();

// route middleware
router.use("/auth", auth);
router.use("/quizzers", quizzer);
router.use("/quizzes", quiz);

module.exports = router;
