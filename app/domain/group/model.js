import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';

const schedule = {
  day: {
    type: String,
    enum: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
  },
  start: String,
  end: String,
};

const groupSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    game: { type: String, required: true },
    description: String,
    schedule: [schedule],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    membeeshipRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'user',
  }
);

groupSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
groupSchema.plugin(mongooseDelete, { deletedAt: true });

export default mongoose.model('Group', groupSchema);
