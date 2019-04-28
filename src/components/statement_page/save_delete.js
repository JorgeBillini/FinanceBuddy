import React from 'react';

export default props => {
    return(
        <div className='container'>
            <div className='row my-5'>
                <div className='col-12 text-center'>
                    <button type="button" className="mx-1 btn btn-lg theme-white theme-green-font theme-green-border">Save</button>
                    <button type="button" className="mx-1 btn btn-lg theme-white theme-red-font theme-red-border">Delete</button>
                </div>
            </div>
        </div>
    )
}