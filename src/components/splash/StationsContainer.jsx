import { connect } from 'react-redux';
import { fetchStationsInfo} from '../actions/stations_action';
import Stations from './Stations';

const mapStateToProps = (state) => {
    let info = state.information.length !==0 ? Object.values(state.information):[]
    return {
        information: info
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStationsInfo: () => dispatch(fetchStationsInfo())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Stations);