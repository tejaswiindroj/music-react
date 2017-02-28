import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

let initLoading = {
    listLoading: true,
    tableLoading: true
}
export const loading = (state = initLoading, action) => {
    switch (action.type) {
        case 'PUT_BANDS':
        case 'PUT_ALBUMS':
        case 'RESET_LOADER':
            return {
                ...state,
                listLoading: action.loading,
                tableLoading: action.tableLoading
            };
        case 'LOAD_TABLE':
            return {
                ...state,
                tableLoading: action.loading
            }
        default:
            return state;
    }
}

export const bands = (state = [], action) => {
    switch (action.type) {
        case 'PUT_BANDS':
            return action.bands;
        case 'PUT_ALBUMS':
            return action.albumsWithBands.bands;
        default:
            return state;
    }
};

export const albums = (state = [], action) => {
    switch (action.type) {
        case 'PUT_ALBUMS':
            return action.albumsWithBands.albums;
        default:
            return state;
    }
};

let initSort = {
    field: 'id',
    order: 'asc'
}
export const sort = (state = initSort, action) => {
    switch (action.type) {
        case 'PUT_BANDS':
        case 'PUT_ALBUMS':
            return {
                ...state,
                ...action.sort
            };
        case 'RESET_LOADER':
            return {field: 'id', order: 'asc'};
        default:
            return state;
    }
}

const App = combineReducers({routing: routerReducer, bands, albums, loading, sort});

export default App
