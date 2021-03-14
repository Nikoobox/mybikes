import { connect } from 'react-redux';
import { fetchStationsInfo} from '../actions/stations_action';
import Stations from './Stations';

const mapStateToProps = (state) => {
    // console.log('-----state container',state)
    let info = state.information.length !==0 ? Object.values(state.information):[]
    // let status = state.status.length !== 0 ? Object.values(state.status) : []
    return {
        information: info
        // status: status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStationsInfo: () => dispatch(fetchStationsInfo())
        // fetchStationsStatus: () => dispatch(fetchStationsStatus())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Stations);