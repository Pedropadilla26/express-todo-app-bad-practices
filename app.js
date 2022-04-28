// === imports == //
import express from 'express'
import bodyParser from 'body-parser'
import { createTask, deleteTask, getAllTasks, updateTask } from './src/tasks/taskController';
//Let's pretend all the necessary imports are here
/* 
The code has still a lot of rooms for improvement. This should be in a router file, some of the endpoints are lacking 
tokens for autentication, the backend in itself should probably be thinked again and the db too.
A new error handler and more config should be used.

*/

// === initialisation == //
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// === endpoints == //
// index endpoint
app.get('/', (req, res) => res.send('Hello World!'))

// get all tasks
app.get('/tasks', getAllTasks)

//should add app.get('/task/:id', getTask)

// create a task
app.post('/task', createTask)

// delete a task
app.delete('/task/:id', deleteTask)

// update a task
app.update('/task/:id', updateTask)

// === run app == //
app.listen(config.httpPort, () => console.log(`Server running. Listening on HTTP port ${config.httpPort} and HTTPS port ${config.httpsPort}`))
util.initDB() // Create some users, etc