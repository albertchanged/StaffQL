const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DepartmentSchema = new Schema({
  title: { type: String },
  department: {
    type: Schema.Types.ObjectId,
    ref: 'department'
  },
  content: { type: String }
});

mongoose.model('department', DepartmentSchema);
