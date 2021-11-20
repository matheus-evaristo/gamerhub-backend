import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    username: { type: String, trim: true, unique: true, required: true },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'user',
  }
);

userSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
userSchema.plugin(mongooseDelete, { deletedAt: true });

export default mongoose.model('User', userSchema);
