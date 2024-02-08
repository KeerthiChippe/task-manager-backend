const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const PORT = 3099

const {checkSchema} = require('express-validator')
const configureDB = require('./config/db')
const taskValidationSchema = require('./app/validators/task-validation')
const tasksCltr = require('./app/controllers/task-controller')
configureDB()

app.post('/api/tasks', checkSchema(taskValidationSchema), tasksCltr.create)
app.get('/api/tasks', tasksCltr.list)
app.get('/api/tasks/:id', tasksCltr.listSingleTask)
app.put('/api/tasks/:id', tasksCltr.update)
app.delete('/api/tasks/:id', tasksCltr.delete)

app.listen(PORT, ()=>{
    console.log('server running on port', PORT)
})