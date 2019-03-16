import axios from 'axios';

import config from '../config';

export function getCredentials() {
    return (dispatch) => {
        Promise
            .all([
                getUserId(),
                getGroupId(),
            ])
            .then(([user, group]) => {
                const { userId } = user.data;
                const { groupId } = group.data;

                dispatch({
                    type: 'SET_AUTH_CREDENTIALS',
                    payload: {
                        userId,
                        groupId,
                    },
                });

            })
            .catch((error) => {
                //TODO: handle error
                console.error(error);
            });
    };
};

function getUserId() {
    const url = `${config.baseUrl}/user/${config.userName}`;

        console.log('called 2');
    return axios.get(url);
}

function getGroupId() {
    const url = `${config.baseUrl}/group/${config.userName}`;

    return axios.get(url);
}
