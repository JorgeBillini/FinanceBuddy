import React from 'react';

export default props => {
    const handleDeleteStatement = e => {
        props.deleteStatement();
    }
    
    const handleSetStatement = e => {
        props.setStatement(e);
    }

    return(
        <>
            {
                (props.saved === 'TRUE') ? 
                    <div className='container'>
                        <div className='row my-5'>
                            <div className='col-12 text-right'>
                                <h5 className='theme-brown-font'>Saved</h5>
                            </div>
                        </div>
                    </div>
                    :
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
            }
        </>
    )
}