import { getStationsInformation, getStationsStatus } from '../util/station_util';

export const RECIEVE_STATIONS_INFO = "RECIEVE_STATIONS_INFO";
export const RECIEVE_STATIONS_STATUS = "RECIEVE_STATIONS_STATUS";
export const RECIEVE_STATION_STATUS = "RECIEVE_STATION_STATUS";

const receiveStationsInfo = (stationsInfo) => {
    return {
        type: RECIEVE_STATIONS_INFO,
        stationsInfo
    }
};

const receiveStationsStatus = (stationsStatus) => {
    return {
        type: RECIEVE_STATIONS_STATUS,
        stationsStatus
    }
};

export const receiveStationStatus = (stationId) => {
    return {
        type: RECIEVE_STATION_STATUS,
        stationId
    }
};

export const fetchStationsInfo = () => dispatch => {
    return getStationsInformation()
        .then(stationsInfo => {
            return dispatch(receiveStationsInfo(stationsInfo))
        })
}

export const fetchStationsStatus = () => dispatch => {
    return getStationsStatus()
        .then(stationsStatus => {
            return dispatch(receiveStationsStatus(stationsStatus))
        })
}