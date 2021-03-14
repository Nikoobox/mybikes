import React from "react";
import { withRouter } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Loading from "../loading/Loading";

class StationStatus extends React.Component{
    constructor(props){
        super(props);
        
    }

    componentDidMount(){
        this.props.fetchStationsStatus()
        .then(()=>{
            this.props.fetchStationStatus(this.props.stationId)
            this.setState({})
        })
    }

    handleClick=()=>{
        this.props.history.push('/')
    }

    render(){
        // console.log("########## from status component", this.props)
        if(!this.props.station){
            return <Loading/>
        }else{
            const {station, stationName, rentalMethods} = this.props;
    
            const methods = rentalMethods.split(",").join(' / ');
            let colorBikes, colorDocks;
            if(station.num_bikes_available === 0){
                colorBikes = 'red'
            } else if (station.num_bikes_available === 1){
                colorBikes = 'orange'
            }else{
                colorBikes = 'green'
            }

            if (station.num_docks_available === 0) {
                colorDocks = 'red'
            } else if (station.num_docks_available === 1) {
                colorDocks = 'orange'
            } else {
                colorDocks = 'green'
            }
            console.log(rentalMethods, stationName, station, methods)
            return(
                <div className="station-container">
                    <div className='info-container'>
                        <button className="back-btn" onClick={this.handleClick}>
                            <div className='icon-box'>
                                <FaArrowLeft className='icon' />
                            </div>
                        <span>Bike Station</span>
                        </button>
                        <div className='info-box'>
                            <div className="name">{stationName}</div>
                            <div className="methods">{methods}</div>
                            <div className="bikes-docks">
                                <div className="ele" >
                                    <span style={{ color: `${colorBikes}` }}>{station.num_bikes_available} </span>
                                    {station.num_bikes_available === 1?'Bike':"Bikes"}
                                </div>

                                <div className="ele">
                                    <span style={{ color: `${colorDocks}` }}>{station.num_docks_available} </span>
                                    {station.num_docks_available === 1 ? 'Dock' : "Docks"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default withRouter(StationStatus);