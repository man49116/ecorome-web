const mongoose = require("mongoose");

const connectDatabase = () => {
  // mongoose
  //   .connect(process.env.DB_URI, {
  //     useNewUrlParser: true,
  //     useCreateIndex: true,
  //     useUnifiedTopology: true,
  //   })
  //   .then((data) => {
  //     console.log(`Mongodb connected with server: ${data.connection.host}`);
  //   });
    mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      useUnifiedTopology: true
  
  })
  .then(() => console.log('MongoDB connection established.'))
  .catch((error) => console.error("MongoDB connection failed:", error.message))
};

module.exports = connectDatabase;
