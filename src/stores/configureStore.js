import thunkMiddleware from 'redux-thunk'
import App from '../reducers'
import {createStore, applyMiddleware, compose} from 'redux'

export default function configureStore(preloadedState) {
    let store = null;
    if (module.hot) {
        let actionCreators = {};
        store = createStore(App, compose(applyMiddleware(thunkMiddleware), window.devToolsExtension
            ? window.devToolsExtension({actionCreators})
            : f => f));
    } else {
        store = createStore(App, applyMiddleware(thunkMiddleware));
    }
    return store
}
