const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StaffSchema = new Schema({
  title: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  role: {
    type: Schema.Types.String,
    ref: 'role'
  },
  department: {
    type: Schema.Types.String,
    ref: 'department'
  }
});

StaffSchema.statics.findRole = function(id) {
  console.log('In findRole', id);
  return this.findById(id)
    .populate('role')
    .then(staff => staff.role);
}

StaffSchema.statics.findDepartment = function(id) {
  console.log('In findDepartment', id);
  return this.findById(id)
    .populate('department')
    .then(staff => staff.department);
}

StaffSchema.statics.editStaffInfo = function(id, title, role, department) {
  const Staff = mongoose.model('staff');
  return Staff.findById(id)
    .then(staff => {
      staff.title = title;
      staff.role = role;
      staff.department = department;
      return staff.save();
    });
}

mongoose.model('staff', StaffSchema);