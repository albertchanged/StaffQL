const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  title: { type: String },
  role: {
    type: Schema.Types.ObjectId,
    ref: 'role'
  },
  content: { type: String }
});

mongoose.model('role', RoleSchema);
