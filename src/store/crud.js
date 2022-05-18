const initialState = {

    filter: {
        pending: true,
        inProgress: true,
        done: true,
    },
    taskList: []

};

const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        case 'ADD_TO_LIST':
            return {
                ...state,
                taskList: ([...state.taskList, action.payload ]),
            };
        case 'DELETE_TASK':
            return {
                ...state,
                taskList: state.taskList.filter( (task) => task.id !== action.payload ),
            };
        case 'UPDATE_STATUS':
            return {
                ...state,
                taskList: ([...state.taskList,{
                    title: action.payload.obj.title,
                    id: action.payload.obj.id,
                    status: action.payload.value,
                }]),
            };
        case 'CHANGE_PENDING':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    pending: !state.filter.pending,
                }, 
            };
        case 'CHANGE_IN_PROGRESS':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    inProgress: !state.filter.inProgress,
                }, 
            };
        case 'CHANGE_DONE':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    done: !state.filter.done,
                }, 
            };
        default:
            return state;    
    }
}

export default reducer;