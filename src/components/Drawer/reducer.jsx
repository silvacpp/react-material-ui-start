const drawerReducerInitialState = {
    open: false
};

const drawerReducer = (state = drawerReducerInitialState, action) => {
    switch (action.type) {
        case "TOGGLE_DRAWER":
            return {...state, open : !state.open };
        default:
            return state;
    }
}

export default drawerReducer;
