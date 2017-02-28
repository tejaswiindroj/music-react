import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

let initLoading = {
    listLoading: true,
    albumsFilterLoading: true
}
export const loading = (state = initLoading, action) => {
    switch (action.type) {
        case 'PUT_BANDS':
        case 'PUT_ALBUMS':
        case 'RESET_LOADER':
            return {
                ...state,
                listLoading: action.loading,
                albumsFilterLoading: action.albumsFilterLoading
            };
        case 'LOAD_ALBUMS_FILTER':
            return {
                ...state,
                albumsFilterLoading: action.loading
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

const App = combineReducers({routing: routerReducer, bands, albums, loading});

export default App
