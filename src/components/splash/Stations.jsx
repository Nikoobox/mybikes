import React from 'react';
import { withRouter } from 'react-router-dom';
import Loading from "../loading/Loading";
import Buttons from './Buttons';

class Stations extends React.Component{
    constructor(props){
        super(props);

        this.state = { info: [], sortedAsc: [], sortedDesc: [], clickedByName: true, 
            sortedCapAsc: [], sortedCapDesc: [], clickedByCapacity: false,
            status:[]
        }
    }

    componentDidMount() {
        this.props.fetchStationsInfo()
        .then(() => this.setState({info:this.props.information}))
        .then(()=>{
            const asc = this.state.info.slice();
            const desc = this.state.info.slice();
            asc.sort(function (a, b) {
                if (a.name < b.name) { return -1; }
                if (a.name > b.name) { return 1; }
                return 0;
            })
            desc.sort(function (a, b) {
                if (a.name > b.name) { return -1; }
                if (a.name < b.name) { return 1; }
                return 0;
            })
            this.setState({ sortedAsc: asc, sortedDesc: desc }, () => this.setState({ info: this.state.sortedAsc }))
        })
    }

    handleClick = (stationId, stationName, rentalMethods)=>{
        this.props.history.push({
            pathname:`/${stationId}`,
            state: {
                stationName: stationName,
                rentalMethods: rentalMethods
             }
        })
    }

    sortByName=()=>{
        if(!this.state.clickedByName){
            this.setState({ info: this.state.sortedAsc, clickedByName: !this.state.clickedByName})
  
        }else{
            this.setState({ info: this.state.sortedDesc, clickedByName: !this.state.clickedByName })
        }
    }

    sortByCapacity=()=>{
        if (!this.state.clickedByCapacity) {
            const asc = this.state.info.slice();
            asc.sort(function (a, b) {
                if (a.capacity < b.capacity) { return -1; }
                if (a.capacity > b.capacity) { return 1; }
                return 0;
            })
            this.setState({ sortedCapAsc: asc, clickedByCapacity: !this.state.clickedByCapacity }, () => this.setState({ info: this.state.sortedCapAsc }))
        }else{
            const desc = this.state.info.slice();
            desc.sort(function (a, b) {
                if (a.capacity > b.capacity) { return -1; }
                if (a.capacity < b.capacity) { return 1; }
                return 0;
            })
            this.setState({ sortedCapDesc: desc, clickedByCapacity: !this.state.clickedByCapacity }, () => this.setState({ info: this.state.sortedCapDesc }))
        }
    }

    render(){
        if(this.state.info.length===0){
            return <Loading/>
        }

        const stationsToRend = Object.values(this.state.info).slice(0,50).map((station,idx)=>{
            const name = station.name;
            const ending = station.capacity===1?'':'s'
            return <li key={idx} className='station' onClick={() => this.handleClick(station.station_id, name, station.rental_methods)}>
                <div className='name-addr'>{name}</div>
                <div className='capacity'>Capacity: {station.capacity} Bike{ending}</div>
                </li>
        })

        return (
            <div className='splash-container'>
                <div className="header-container">
                    <div className="title">Bike Stations</div>
                    <Buttons sortByName={this.sortByName} sortByCapacity={this.sortByCapacity} clickedByCapacity={this.state.clickedByCapacity} clickedByName={this.state.clickedByName}/>
                </div>
                <div className="stations-container">
                    <div className="stations-box">
                        <ul className="stations">
                            {stationsToRend}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Stations)