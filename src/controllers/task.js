export const getAllTasks = async (req, res, next) => {
    try {
      return res.status(200).json({ data: todoItems, status: "success" })
    } catch (err) {
      return next(err)
    }
}

export const createTask = async (req, res, next) => {
    try {
        todoItems.push({
            index: index++,
            value: req.body.value,
            done: false,
        })
      return res.status(200)
    } catch (err) {
      return next(err)
    }
}


export const deleteTask = async (req, res, next) => {
    try {
        if (!req.params.id){
            throw new Error("Lacking id param in delete task request")
        }
        deleteTask(req.params.id)
        return res.status(200)
    } catch (err) {
      return next(err)
    }
}

export const updateTask = async (req, res, next) => {
    try {
        if (!req.params.id || !req.body.done){
            throw new Error("Lacking params in update task request")
        }
        updateTask(req.params.id, req.body.done)
        return res.status(200)
    } catch (err) {
      return next(err)
    }
}