import mongoose from 'mongoose'

const sessionSchema = new mongoose.Schema({
  sessionId: {
    type: String,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model('Session', sessionSchema)