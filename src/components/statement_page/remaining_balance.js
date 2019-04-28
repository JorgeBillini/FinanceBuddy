import React from 'react';

export default props => {

    const remainder = 1200;

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-12 text-center my-5'>
                    <h1 style={{fontSize: 72}}>${remainder}</h1>
                </div>
            </div>
        </div>
    )
}