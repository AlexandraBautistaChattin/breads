const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require ('express-react-views').createEngine())

// MIDDLEWARE
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
}) 

const breadsController = require('./controllers/breads_controllers.js') 
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })

app.listen(PORT, () => {
    console.log('listen on port', PORT);
})

