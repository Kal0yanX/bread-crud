const express = require('express') 
require('dotenv').config()
const breadController =require('./controllers/bread')

const app = express()

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  })

//middleware
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//routes
app.use('/breads', breadController)

const PORT =process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))