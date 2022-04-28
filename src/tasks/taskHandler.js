//Let's pretend all the necessary imports are here
//Just lets imagine that the index here is an _id done automatically and fine by mongoose
import { todoItems } from "./taskModel"

export const getAllTasks = async () => {
    return todoItems.find()
}

export const createTask = async (body) => {
    const toDo = new todoItems({ value: body, done: false });
    await toDo.save()
}

export const deleteTask = async (id) => {
    await todoItems.findOneAndDelete({'_id': id}) 
}

export const updateTask = async (id, body) => {
    const doc = await todoItems.findOne({ _id: id });
    doc.value = body
    await doc.save(); 
}