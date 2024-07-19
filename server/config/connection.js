const mongoose = require("mongoose");

const mongoURI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/googlebooks";
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

module.exports = mongoose.connection;
