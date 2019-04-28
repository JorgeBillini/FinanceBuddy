import React from 'react';

export default props => {
    return(
        <div className='container'>
            <div className='row my-5'>
                <div className='col-12 text-center'>
                    <button type="button" class="mx-1 btn btn-lg theme-green theme-white-font">Save</button>
                    <button type="button" class="mx-1 btn btn-lg theme-red theme-white-font">Delete</button>
                </div>
            </div>
        </div>
    )
}