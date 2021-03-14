import axios from 'axios';


export const getStationsInformation = () => {
    return axios.get(`https://tor.publicbikesystem.net/ube/gbfs/v1/en/station_information`)
}

export const getStationsStatus = () => {
    return axios.get(`https://tor.publicbikesystem.net/ube/gbfs/v1/en/station_status`);
}


// https://tor.publicbikesystem.net/ube/gbfs/v1/en/station_information
// https://tor.publicbikesystem.net/ube/gbfs/v1/en/station_status