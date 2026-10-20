const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
  action: { type: String, required: true }, // Contoh: 'CREATE_TODO', 'UPDATE_TODO', 'DELETE_TODO'
  description: { type: String, required: true },
  targetId: { type: mongoose.Schema.Types.ObjectId }, // ID data yang terpengaruh
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  updated_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  archived: { type: Boolean, default: false }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('ActivityLog', activityLogSchema);