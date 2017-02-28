import {connect} from 'react-redux'
import AlbumListComponent from '../components/AlbumList'
import {getAlbums, resetLoader} from '../actions/index'

const mapStateToProps = (state, ownProps) => {
    return {albums: state.albums, bands: state.bands, loading: state.loading}
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAlbums: (band) => dispatch(getAlbums(band)),
        resetLoader: (loading) => dispatch(resetLoader(loading))
    }
};

const AlbumList = connect(mapStateToProps, mapDispatchToProps)(AlbumListComponent);

export default AlbumList;
