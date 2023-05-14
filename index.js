const express = require('express') 
const methodOverride = require('method-override')
const mongoose = require('mongoose')
require('dotenv').config()
const breadController =require('./controllers/bread')
const bakerController = require('./controllers/baker')

const app = express()

//middleware
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

//routes
app.use('/breads', breadController)
app.use('/baker', bakerController)
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  })


const PORT =process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))