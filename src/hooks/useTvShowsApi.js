import React, { useState, useEffect } from 'react';

const useTvShowsApi = (API) => {

    const [state, setState ] = useState([])

    useEffect(() => {

        const apiRequest = async () => {
            let response = await fetch(API)
            let data = await response.json();

            setState(data);
        }

        apiRequest();
    }, []);

    return state;
}

export default useTvShowsApi;