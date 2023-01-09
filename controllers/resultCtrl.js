const Result = require("../models/result");
const User = require("../models/userModel");
const Quiz = require("../models/quizModal");

const resultCtrl = {
     findById: async (req, res, next) => {
          try {
               const result = await Result.findById(req.params.id);
               if (result) {
                    let user_id = req?.user?.id;
                    const user = await User.findById(user_id);
                    if (!user) return res.status(400).send("user not found.");
                    const quiz = await Quiz.findById(result.quizId);
                    if (!quiz) return res.status(400).send("Quiz not found.");
                    return res.status(200).json({
                         result,
                         user,
                         quiz,
                    });
               }
               return res.status(400).send("Result not found.");
          } catch (err) {
               console.log("Error", err);
               return res.status(400).send("Invalid data given.");
          }
     },

     findAll: async (req, res, next) => {
          try {
               const results = await Result.find({});
               if (results) {
                    return res.status(200).send(results);
               }
               console.log(results);
               res.status(400).send("results not found");
          } catch (err) {
               console.log("Error", err);
               return res.status(500).json({ msg: err.message });
          }
     },

     findByUser: async (req, res, next) => {
          try {
               let user_id = req?.user?.id;
               const results = await Result.find({ userId: user_id });
               if (results) {
                    return res.status(200).send(results);
               }
               return res.status(400).send("Invalid data given.");
          } catch (err) {
               console.log("Error", err);
               return res.status(500).json({ msg: err.message });
          }
     },
     findByQuizId: async (req, res, next) => {
          try {
               let quizId = req.params.id;
               const results = await Result.find({ quizId });
               if (results) {
                    return res.status(200).send(results);
               }
               return res.status(400).send("Invalid data given.");
          } catch (err) {
               console.log("Error", err);
               return res.status(500).json({ msg: err.message });
          }
     },
     delete : async (req, res) =>{
          try {
               let {resultId} =req.body
              if(!resultId) return res.status(400).json({msg: "Result id required"})
              const response = await Result.findOneAndDelete({ _id:resultId})
              console.log(response)
              if(!response) return res.status(400).json({msg: "Result does not exist."})
              return res.status(200).json({msg:'Result deleted successfully'});
          } catch (err) {
              return res.status(500).json({msg: err.message})
          }
      }
};
module.exports = resultCtrl;
