import constants from '../Constants/Index'

const initialState = {
    showTaskForm: false,
    taskList: []
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case constants.ADD_TASK:
            // const taskData = payload
            // taskData.id = task.length
            return {
                ...state,
                showTaskForm: payload,
            };
        case constants.ADD_NEW_TASK:
            const taskData = payload.newData
            taskData.id = payload.existingData.length
            const oldData = payload.existingData
            oldData.push(taskData)
            return {
                ...state,
                taskList: oldData,
                showTaskForm: false
            }
        case constants.DELETE_TASK: {
            return {
                ...state,
                taskList: state.taskList.filter((item) => item.id !== action.payload)
            };
        }
        default:
            return state;
    }
}
