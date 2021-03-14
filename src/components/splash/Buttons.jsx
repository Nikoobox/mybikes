import React, {useState} from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

function Buttons({ sortByName, sortByCapacity, clickedByName, clickedByCapacity}){

    const [value, setValue] = useState('Station Name')

    const handleNameSorting=(e)=>{
        sortByName()
        setValue(e.target.innerText)
    }

    const handleCapacitySorting=(e)=>{
        sortByCapacity()
        setValue(e.target.innerText)
    }

    const stationNameWhichArrow = clickedByName ? <FaArrowDown/> : <FaArrowUp/>
    const stationNameArrowsDisp = value === 'Station Name' ? stationNameWhichArrow : '';

    const stationCapacityWhichArrow = clickedByCapacity ? <FaArrowDown /> : <FaArrowUp />
    const stationCapacityArrowsDisp = value === 'Capacity' ? stationCapacityWhichArrow : '';


    return (
        <div className="buttons-box">
            <button onClick={handleNameSorting}>
                {stationNameArrowsDisp}
                Station Name
            </button>
            
            <button onClick={handleCapacitySorting}>
                {stationCapacityArrowsDisp}
                Capacity
            </button>
        </div>
    )
}

export default Buttons;