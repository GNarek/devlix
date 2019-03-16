const prosConsList = {
    pros: null,
    cons: null,
};

export default (state = prosConsList, action) => {
    switch (action.type) {
        case 'SET_PROS_CONS': {
            return action.payload;
        }

        default:
            return state;
    }
};
