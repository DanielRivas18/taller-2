const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

require('./drivers/connect-db')

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.set('PORT',process.env.PORT || 3000 )

app.use('/api/products', require('./routes/routes-products'))

app.listen(app.get('PORT'),()=>console.log(`Server Ready al port ${app.get('PORT')}`))