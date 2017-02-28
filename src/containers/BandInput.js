import {connect} from 'react-redux'
import BandInputComponent from '../components/BandInput'
import {postBand} from '../actions/index'

const mapStateToProps = (state, ownProps) => {
    return {}
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        postBand: (band) => {
            dispatch(postBand(band))
        }
    }
};

const BandInput = connect(mapStateToProps, mapDispatchToProps)(BandInputComponent);

export default BandInput;
