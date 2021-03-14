import { RECIEVE_STATIONS_INFO, RECIEVE_STATIONS_STATUS, RECIEVE_STATION_STATUS } from "./../actions/stations_action";

const RootReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECIEVE_STATIONS_INFO:
            let infos = {};
            action.stationsInfo.data.data.stations.forEach((station)=>{
                infos[[parseInt(station.station_id)]]= station
            })
            return { ...state,information:infos}

        case RECIEVE_STATIONS_STATUS:
            let statuses = {};
            action.stationsStatus.data.data.stations.forEach((station) => {
                statuses[[parseInt(station.station_id)]] = station
            })
            return { ...state,status: statuses }

        case RECIEVE_STATION_STATUS:
            let station = {};
            station[action.stationId] = state.status[action.stationId];
            return { ...state, station }

        default:
            return state;
    }
};

export default RootReducer;
