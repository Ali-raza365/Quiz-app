const mongoose = require('mongoose')

var id = mongoose.Types.ObjectId();
var icon ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFEkKiaE16xIRll9SyEvOn_M4bOqVHuiWC6Q&usqp=CAU"

const quizSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  icon:{
    type: String,
    default:icon,
  },
  type: {
    type: String,
    required:true,
    default:1,
    // required: true,
  },
  questions: [
    {
      question: {
        type: String,
        required: true,
      },
      options: [
        {
          id:{
            type: String,
            required:true,
            default:id,
          },
          value: {
            type: String,
            required: true,
          },
        },
      ],
      answer: {
        type: Number,
        required: true,
      },
    },
  ],
  participated: {
    type: Number,
    default: 0,
  },
  flawless: {
    type: Number,
    default: 0,
  },
} ,{
     timestamps: true //important
 });

module.exports = mongoose.model("Quiz", quizSchema);
