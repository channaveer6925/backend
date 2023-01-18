const mongoose = require('mongoose');

// connection creation, 
mongoose.connect(
  'mongodb://localhost:27017/database',
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
).then(()=>console.log("connection done")).catch(()=>console.log("error occured"))
