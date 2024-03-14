const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authroutes=require("./routes/authRoutes");
const protectedRoutes = require('./routes/protected');


require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended:false }));


mongoose.connect("mongodb://localhost:27017/userdetail", {
   useNewUrlParser: true,
   useUnifiedTopology: true
});


app.use("/api/auth", authroutes);
app.use('/protected', protectedRoutes);




const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));



