const initialState = {

    taskList: [],

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

        default:
            return state;    
    }
}

export default reducer;