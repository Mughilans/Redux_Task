import constants from '../Constants/Index'


export const addTask = (showTaskForm) => dispatch => {
    return dispatch({
        type: constants.ADD_TASK,
        payload: showTaskForm
    })
}
export const addNewTask = (addTaskForm) => dispatch => {
    return dispatch({
        type: constants.ADD_NEW_TASK,
        payload: addTaskForm
    })
}
export const deleteTask = (deletelist) => dispatch => {
    return dispatch({
        type: constants.DELETE_TASK,
        payload: deletelist
    })
}
