const filtersReducerDefaultState = {
    isOpen: false
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'ISOPEN':
            return {
                ...state,
                isOpen: action.isOpen
            };
        default:
            return state;
    }
}