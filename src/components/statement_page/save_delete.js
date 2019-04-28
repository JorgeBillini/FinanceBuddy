import React from 'react';

export default props => {
    const handleDeleteStatement = e => {
        props.deleteStatement();
    }
    
    const handleSetStatement = e => {
        props.setStatement();
    }

    return(
        <div className='container'>
            <div className='row my-5'>
                <div className='col-12 text-right'>
                    <button type="button" className="mx-1 btn btn-lg theme-white theme-green-font theme-green-border"
                        onClick={handleSetStatement}>Set Statement</button>
                    <button type="button" className="mx-1 btn btn-lg theme-white theme-red-font theme-red-border"
                        onClick={handleDeleteStatement}>Delete Statement</button>
                </div>
            </div>
        </div>
    )
}