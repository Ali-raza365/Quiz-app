const Quiz = require('../models/quizModal')
const Result = require('../models/result')


const quizCtrl = {
     create: async (req, res) => {
          try {

               const { title, description, type, questions, icon } = req.body;
               let user_id = req?.user?.id

               const newQuiz = new Quiz({ user_id, title, icon, description, type, questions });

               await newQuiz.save()

               res.json({ data: newQuiz })

          } catch (err) {
               console.log(err)
               return res.status(500).json({ msg: err.message })
          }
     },
     findById: async (req, res, next) => {

          try {
               const quiz = await Quiz.findById(req.params.id);
               if (quiz) {
                    return res.status(200).send(quiz);
               }
               return res.status(400).send("Quiz not found.");
          } catch (err) {
               console.log("Error", err);
               return res.status(400).send("Invalid data given.");
          }
     },

     findAll: async (req, res, next) => {
          try {
               const quizzes =await Quiz.find({})
               if (quizzes) {
                    return res.status(200).send(quizzes);
               }
               console.log(quizzes)
                res.status(400).send("quizzes not found");
          } catch (err) {
               console.log("Error", err);
               return res.status(500).json({ msg: err.message })
          }
     },

     findByUser: async (req, res, next) => {
          try {
               const quizzes = await Quiz.find({ user_id: req.params.id });
               if (quizzes) {
                    return res.status(200).send(quizzes);
               }
               return res.status(400).send("Invalid data given.");
          } catch (err) {
               console.log("Error", err);
               return res.status(500).json({ msg: err.message })
          }
     },
     submit: async (req, res, next) => {
          try {
            const { quiz_id, answers } = req.body;
          let user_id = req?.user?.id
          if(!user_id) return   res.status(400).send("user id require");
          if(!quiz_id) return   res.status(400).send("quiz id require");
      
            const quiz = await Quiz.findById(quiz_id);
            if (!quiz)  return   res.status(400).send("no quiz found");
              let solved = 0;
              const { questions } = quiz;
              for (let i = 0; i < questions.length; i++) {
                if (questions[i].answer === answers[i]) {
                  solved++;
                }
               }
              
      
              // update quiz stats
              quiz.participated++;
              quiz.flawless += Number(solved === questions.length); // + 0 or 1
              const updatedQuiz = await Quiz.findByIdAndUpdate(quiz_id, quiz);
              const newResult = new Result({ userId:user_id,quizId:quiz_id,score: solved,total:questions.length });
              await newResult.save()
     

              const response = {
                result:newResult,
              };
              res.status(200).send(response);
      
          } catch (err) {
            console.log("Error", err);
            return res.status(400).send("Invalid data given.");
          }
        },
    update: async (req, res) =>{
          try {
              let {quizId,...others} =req.body
              if(!quizId) return res.status(400).json({msg: "Quiz id required"})
              const quiz = await Quiz.findOneAndUpdate(quizId,others,{returnOriginal: false})
              if(!quiz) return res.status(400).json({msg: "Quiz does not exist."})
              res.json(quiz)
          } catch (err) {
              return res.status(500).json({msg: err.message})
          }
      },
      delete : async (req, res) =>{
          try {
               let {quizId} =req.body
              if(!quizId) return res.status(400).json({msg: "Quiz id required"})
              const result = await Quiz.findOneAndDelete({ _id:quizId})
              console.log(result)
              if(!result) return res.status(400).json({msg: "Quiz does not exist."})
              return res.status(200).json({msg:'Quiz deleted successfully',result},);
          } catch (err) {
              return res.status(500).json({msg: err.message})
          }
      }
}
module.exports = quizCtrl

// const Joi = require("@hapi/joi");

// const Quiz = require("../model/Quiz");
// const QuizzerController = require("./QuizzerController");

// const QuizController = {
//   createQuiz: async (req, res, next) => {
//     const { title, description, type, questions } = req.body;
//     const user_id = req.params.user_id;

//     // const quizSchema = Joi.object({
//     //   user_id: Joi.string().required(),
//     //   title: Joi.string().required(),
//     //   description: Joi.string(),
//     //   type: Joi.string().required(),
//     //   questions: Joi.array().required(),
//     // });

//     try {
//       // create Quiz
//       const quiz = new Quiz({ user_id, title, description, type, questions });
//       // //   validating given data
//       // const { error } = quizSchema.validate(quiz);
//       // console.log(error);
//       // if (error)
//       //   return res.status(400).send("[validation error] Invalid data given.");
//       // return res.status(200).send("HU");
//       const savedQuiz = await quiz.save();

//       const quizzer = QuizzerController.incrementCuratedCount(user_id);
//       if (quizzer) {
//         return res.status(200).send(savedQuiz);
//       }
//       return res.status(400).send("Quizzer Does not exist.");
//     } catch (err) {
//       console.log("Error", err);
//       return res.status(400).send("Does not exist.");
//     }
//   },

//   findById: async (req, res, next) => {
//     try {
//       const quiz = await Quiz.findById(req.params.quiz_id);
//       if (quiz) {
//         // remove answers and send
//         const { questions } = quiz;
//         for (let i = 0; i < questions.length; i++) {
//           const { _id, options, id, title } = questions[i];
//           questions[i] = { _id, options, id, title };
//         }
//         quiz.questions = questions;
//         return res.status(200).send(quiz);
//       }
//       return res.status(400).send("Quiz not found.");
//     } catch (err) {
//       console.log("Error", err);
//       return res.status(400).send("Invalid data given.");
//     }
//   },

//   findAll: async (req, res, next) => {
//     try {
//       const quizzes = await Quiz.find();
//       if (quizzes) {
//         return res.status(200).send(quizzes);
//       }
//       return res.status(400).send("Invalid data given.");
//     } catch (err) {
//       console.log("Error", err);
//       return res.status(400).send("Invalid data given.");
//     }
//   },

//   findByUser: async (req, res, next) => {
//     try {
//       const quizzes = await Quiz.find({ user_id: req.params.user_id });
//       if (quizzes) {
//         return res.status(200).send(quizzes);
//       }
//       return res.status(400).send("Invalid data given.");
//     } catch (err) {
//       console.log("Error", err);
//       return res.status(400).send("Invalid data given.");
//     }
//   },
//   submitQuizAnswer: async (req, res, next) => {
//     try {
//       const user_id = req.params.user_id;
//       const { quiz_id, answers } = req.body;

//       const quiz = await Quiz.findById(quiz_id);
//       if (quiz) {
//         let solved = 0;
//         const { questions } = quiz;
//         for (let i = 0; i < questions.length; i++) {
//           if (questions[i].answer === answers[i].answer) {
//             solved++;
//           }
//         }

//         // update quiz stats
//         quiz.participated++;
//         quiz.flawless += Number(solved === questions.length); // + 0 or 1
//         const updatedQuiz = await Quiz.findByIdAndUpdate(quiz_id, quiz);

//         // update quizzer stats
//         const updatedQuizzer = await QuizzerController.incrementParticipationCount(
//           user_id,
//           solved === questions.length
//         );

//         const response = {
//           user_id: user_id,
//           quiz_id: quiz_id,
//           total_questions: questions.length,
//           solved: solved,
//         };
//         res.status(200).send(response);
//       } else {
//         res.status(400).send("Quiz not found!");
//       }
//     } catch (err) {
//       console.log("Error", err);
//       return res.status(400).send("Invalid data given.");
//     }
//   },
// };
// module.exports = QuizController;
