const auth = {
    groupId: null,
    userId: null,
};

export default (state = auth, action) => {
    switch (action.type) {
        case 'SET_AUTH_CREDENTIALS': {
            const { payload: { groupId, userId } } = action;

            return { groupId, userId };
        }

        default:
            return state;
    }
};
