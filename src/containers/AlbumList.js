import {connect} from 'react-redux'
import AlbumListComponent from '../components/AlbumList'
import {getAlbums, resetLoader, getSort, sortCheck} from '../actions/index'

const mapStateToProps = (state, ownProps) => {
    return {albums: state.albums, bands: state.bands, loading: state.loading, sort: state.sort}
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAlbums: (band, sort) => dispatch(getAlbums(band, sort)),
        resetLoader: (loading) => dispatch(resetLoader(loading)),
        sortCheck,
        getSort
    }
};

const AlbumList = connect(mapStateToProps, mapDispatchToProps)(AlbumListComponent);

export default AlbumList;
