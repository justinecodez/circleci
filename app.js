const express = require('express')
const mongoose = require('mongoose')
const expressLayouts = require('express-ejs-layouts')



const app = express()

// DB Config
const db = require('./config/keys')

// Connect to MongoDB
mongoose.connect(db.mongoURI,{ 
   useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

//setting tampleting engine
app.use(expressLayouts);
app.set('view engine', 'ejs')

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

//routing
const indexRoute = require('./routes/index')
const authRoute = require('./routes/users')

//middlewares
app.use('/', indexRoute)
app.use('/auth',authRoute)



const port = process.env.PORT || 5000


app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
})