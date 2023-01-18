const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
  {
    user_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mob: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// userSchema.findOne({"password":userShema.password},(req,res)=>{
//   if(err){
//     res.send(err)
//   }
//   else{
//     bcrypt.hash(userShema.password,(err,hash)=>{
//    if(err){
//     console.log(err);
//    }
//    else{
//       bcrypt.compare(userShema.password,hash).then((res)=>{
//         if(res)
//         {
//           pass=true
//         }
//         else{
//            pass =false
//         }
//       })
//    }
//     })
//   }
// })

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
