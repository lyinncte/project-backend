const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  updated_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  archived: { type: Boolean, default: false }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('User', userSchema);