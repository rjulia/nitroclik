import data from "../../data/data";


const filtersReducerDefaultState = {
    isOpen: false,
    data: []
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'ISOPEN':
            return {
                ...state,
                isOpen: action.isOpen
            };
        case 'GETDATA':
            return {
                ...state,
                data: data
            };
        default:
            return state;
    }
}