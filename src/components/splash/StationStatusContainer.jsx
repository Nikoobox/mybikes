import { connect } from 'react-redux';
import { fetchStationsStatus, receiveStationStatus } from '../actions/stations_action';
import StationStatus from './StationStatus';

const mapStateToProps = (state, ownProps) => {
    let status = state.status.length !== 0 ? Object.values(state.status) : [];
    let station = state.station.length !== 0 ? state.station : [];
    if (!ownProps.location.state) {
        return {
            stationId: parseInt(ownProps.match.params.stationId),
            stationName: localStorage.getItem('stationName'),
            rentalMethods: localStorage.getItem('rentalMethods'),
            status: status,
            station: Object.values(station)[0]
        }
    } else {
        localStorage.setItem('rentalMethods', ownProps.location.state.rentalMethods);
        localStorage.setItem('stationName', ownProps.location.state.stationName);
        return {
            stationId: parseInt(ownProps.match.params.stationId),
            stationName: localStorage.getItem('stationName'),
            rentalMethods: localStorage.getItem('rentalMethods'),
            status: status,
            station: Object.values(station)[0]
        }
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStationsStatus: () => dispatch(fetchStationsStatus()),
        fetchStationStatus: stationId => dispatch(receiveStationStatus(stationId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StationStatus);