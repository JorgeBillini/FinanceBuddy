import React from 'react';

export default props => {

    const donation = 500;
    const reach = 1000;

    const percentage = ((donation / reach) * 100).toFixed();

    

    return(
        <>
            <div className='container'>
                <div className='row text-center'>
                    <div className='col-12 col-xs-12 my-3'>
                        <h1 style={{fontSize: 72}}>GOAL</h1>
                    </div>
                </div>
                
                <div className='row'>
                <div className="col-12 mt-3">
                    <div className="progress-bar bg-success rounded" role="progressbar" style={{ width: percentage+'%' }} aria-valuenow={percentage}
                      aria-valuemin="0" aria-valuemax="100">{percentage}%</div>
                </div>
                </div>
            </div>
        </>
    )
}