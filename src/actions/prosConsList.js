import axios from 'axios';

import config from '../config';

export function getProsConsList(groupId, userId) {

    return (dispatch) => {
        const url = `${config.baseUrl}/proscons/group/${groupId}/user/${userId}`;

        axios.get(url)
            .then(({data}) => {

                dispatch({
                    type: 'SET_PROS_CONS',
                    payload: {
                        cons: data.cons || [],
                        pros: data.pros || [],
                    },
                });
            })
            .catch((error) => {
                // The API returns 404 when pros and cons are completly removed.
                // So we update our store with empty lists.
                if (error.response && error.response.status === 404) {
                    dispatch({
                        type: 'SET_PROS_CONS',
                        payload: {
                            cons: [],
                            pros: [],
                        },
                    });
                } else {
                    //TODO: handle error
                    console.error(error);
                }
            });
    };
};

export function updateData(groupId, userId, data) {

    return (dispatch) => {
        const url = `${config.baseUrl}/proscons/group/${groupId}/user/${userId}`;

        axios.put(url, data)
            .then((result) => {
                dispatch({
                    type: 'SET_PROS_CONS',
                    payload: result.data,
                });
            })
            .catch((error) => {
                //TODO: handle error
                console.error(error);
            });
    };
};
