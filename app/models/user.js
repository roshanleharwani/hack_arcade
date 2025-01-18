import mongoose from 'mongoose';


const User = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  tag:{
    type: String,
    required: true,
  },
  rank:{
    type: Number,
    default:null
  },
  points:{
    type:Number,
    default:0
  },
  tournamentCreated: {
  type: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tournament',
    },
  ],
  default: [],
},
  winnings:{
    type:Number,
    default:0,
  },
  tournamentsPlayed:{
    type:Number,
    default:0,
  },
  rewards:{
    type:Number,
    default:0,
  },



 
});

export default mongoose.models.User || mongoose.model('User', User);

