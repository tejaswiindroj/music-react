import {connect} from 'react-redux'
import BandListComponent from '../components/BandList'
import {getBands, resetLoader} from '../actions/index'

const mapStateToProps = (state, ownProps) => {
    return {bands: state.bands, loading: state.loading.listLoading}
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getBands: () => dispatch(getBands()),
        resetLoader: (loading) => dispatch(resetLoader(loading))
    }
};

const BandList = connect(mapStateToProps, mapDispatchToProps)(BandListComponent);

export default BandList;
