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

// RoleSchema.statics.like = function(id) {
//   const Lyric = mongoose.model('lyric');

//   return Lyric.findById(id)
//     .then(lyric => {
//       ++lyric.likes;
//       return lyric.save();
//     })
// }

mongoose.model('department', DepartmentSchema);
