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

// RoleSchema.statics.like = function(id) {
//   const Lyric = mongoose.model('lyric');

//   return Lyric.findById(id)
//     .then(lyric => {
//       ++lyric.likes;
//       return lyric.save();
//     })
// }

mongoose.model('role', RoleSchema);
