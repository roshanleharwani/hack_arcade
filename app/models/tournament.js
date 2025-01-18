import mongoose from 'mongoose';

const Tournament = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  game: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  format:{
    type: String,
    required: true,
  },
  teamSize:{
    type: Number,
    required: true,
  },
  maxTeam:{
    type: Number,
    required: true,
  },
  entryFees:{
    type: Number,
    required: true,
  },
  prizePool:{
    type: Number,
    required: true,
  },
  startDate:{
    type:String,
    required:true
  },
  startTime:{
    type:String,
    required:true,
  },
  stream:{
    type:Boolean,
    default:false
  },
  spectators:{
    type:Boolean,
    default:true
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
 
});

export default mongoose.models.Tournament || mongoose.model('Tournament', Tournament);

