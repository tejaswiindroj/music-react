import fetch from 'isomorphic-fetch'
import cookie from 'react-cookie'

export const fetchConfig = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': cookie.load('XSRF-TOKEN')
    }
};

export const resetLoader = (loading) => {
    return {type: 'RESET_LOADER', loading}
}

export const getBands = () => {
    return dispatch => {
        return fetch('/bands/all', {
            method: 'GET',
            ...fetchConfig
        }).then(response => response.json()).then(json => dispatch(putBands(json, false)))
    }
};

export const putBands = (bands, loading) => {
    return {type: 'PUT_BANDS', bands, loading}
};

export const loadAlbumsFilter = (loading) => {
    return {type: 'LOAD_ALBUMS_FILTER', loading}
}

export const getAlbums = (band) => {
    return dispatch => {
        dispatch(loadAlbumsFilter(true));
        return fetch('/albums/all?band=' + band, {
            method: 'GET',
            ...fetchConfig
        }).then(response => response.json()).then(json => dispatch(putAlbums(json, false, false)))
    }
};

export const putAlbums = (albumsWithBands, loading, albumsFilterLoading) => {
    return {type: 'PUT_ALBUMS', albumsWithBands, loading, albumsFilterLoading}
};
