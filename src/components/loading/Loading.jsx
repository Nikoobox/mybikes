import React from 'react';
import LoadingIcon from './Spinning_line.gif';

function Loading(){

    return(
        <div className='loading-container'>
            <div className='icon-box'>
                <img src={`${LoadingIcon}`} alt=""/>
            </div>
        </div>
    )
}

export default Loading;