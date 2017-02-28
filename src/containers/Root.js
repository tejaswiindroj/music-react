import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {Router, Route, IndexRedirect} from 'react-router'
import App from '../components/App'
import BandList from '../containers/BandList'
import AlbumList from '../containers/AlbumList'

const routes = (
    <Route path="/" component={App}>
        <IndexRedirect to="/bands" />
        <Route path="bands" component={BandList} />
        <Route path="albums" component={AlbumList} />
    </Route>
);

export default class Root extends Component {
    render() {
        const {store, history} = this.props;
        return (
            <Provider store={store}>
                <Router history={history} routes={routes}/>
            </Provider>
        )
    }
}
