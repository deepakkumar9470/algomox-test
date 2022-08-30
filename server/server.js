import express from 'express'

const app = express()
import cors from 'cors'
import apiroute from './router/api.js'
app.use(express.json())

app.use(express.urlencoded({extended : true}))

app.use(cors())

app.use('/api', apiroute)

app.get('/', (req,res) =>{
    res.send('hoolll')
})


app.listen(5000, () =>{
    console.log(`Server started at port http://localhost:5000`)
})