import mongoose from 'mongoose';

const schema = {
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['admin', 'operator', 'user'],
  },
};

export default mongoose.model('User', schema);
