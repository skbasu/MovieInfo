import React from 'react';
import './MoreInfo.css';

function MoreInfo({ director, producer, production, actors }) {
    return (
        <div className='more_info'>
            <h3 className='director'><strong>Director  :</strong>  {director}</h3>
            <h3 className='producer'>Producer :  {producer}</h3>
            <h3 className='production'>Production :  {production}</h3>
            <h3 className='actors'>Actors :  {actors}</h3>
        </div>
    );
}

export default MoreInfo;
