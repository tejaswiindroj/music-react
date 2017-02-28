import {connect} from 'react-redux'
import BandListComponent from '../components/BandList'
import {getBands, resetLoader, getSort, sortCheck} from '../actions/index'

const mapStateToProps = (state, ownProps) => {
    return {bands: state.bands, loading: state.loading, sort: state.sort}
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getBands: (sort) => dispatch(getBands(sort)),
        resetLoader: (loading) => dispatch(resetLoader(loading)),
        sortCheck,
        getSort
    }
};

const BandList = connect(mapStateToProps, mapDispatchToProps)(BandListComponent);

export default BandList;
