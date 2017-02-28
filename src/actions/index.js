import fetch from 'isomorphic-fetch'
import cookie from 'react-cookie'

export const fetchConfig = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': cookie.load('XSRF-TOKEN')
    }
};

export const resetLoader = (loading, tableLoading) => {
    return {type: 'RESET_LOADER', loading, tableLoading}
}

export const getBands = (sort) => {
    return dispatch => {
        dispatch(loadTable(true));
        return fetch('/bands/all?sort=' + sort.field + '&order=' + sort.order, {
            method: 'GET',
            ...fetchConfig
        }).then(response => response.json()).then(json => dispatch(putBands(json.bands, json.sort, false, false)))
    }
};

export const putBands = (bands, sort, loading) => {
    return {type: 'PUT_BANDS', bands, sort, loading}
};

export const loadTable = (loading) => {
    return {type: 'LOAD_TABLE', loading}
}

export const getAlbums = (band, sort) => {
    return dispatch => {
        dispatch(loadTable(true));
        return fetch('/albums/all?band=' + band + '&sort=' + sort.field + '&order=' + sort.order, {
            method: 'GET',
            ...fetchConfig
        }).then(response => response.json()).then(json => dispatch(putAlbums(json, sort, false, false)))
    }
};

export const putAlbums = (albumsWithBands, sort, loading, tableLoading) => {
    return {type: 'PUT_ALBUMS', albumsWithBands, sort, loading, tableLoading}
};

export const getSort = (_sort, field) => {
    let sort = {}
    if (_sort.field === field) {
        sort.field = _sort.field;
        sort.order = (_sort.order === 'asc')
            ? 'desc'
            : 'asc';
    } else {
        sort.field = field;
        sort.order = 'asc';
    }
    return sort;
};

export const sortCheck = (sort, field) => {
    return (sort.field === field)
        ? 'sorted ' + ((sort.order === 'asc')
            ? 'ascending'
            : 'descending')
        : null
};
