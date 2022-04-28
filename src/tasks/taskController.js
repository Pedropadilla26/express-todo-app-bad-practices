//Let's pretend all the necessary imports are here
export const getAllTasks = async (req, res, next) => {
    try {
      const allTasks = await getAllTasks()
      return res.status(200).json(allTasks)
    } catch (err) {
      return next(err)
    }
}

export const createTask = async (req, res, next) => {
    try {
        if (!req.body.done){
            throw new Error("Lacking task body in create task request")
        }
        await createTask(req.body.value)
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
        await deleteTask(req.params.id)
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
        await updateTask(req.params.id, req.body.done)
        return res.status(200)
    } catch (err) {
      return next(err)
    }
}