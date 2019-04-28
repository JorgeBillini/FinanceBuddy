import React from 'react';

export default props => {
    console.log(props);
    const handleAddClick = e => {
        props.openExpenseModal(e)        
    }

    return(
        <>
            {
                (props.saved === 'FALSE') ? 
                    <>
                    <div className='container'>
                        <div className='row' style={{justifyContent: 'space-evenly'}}>
                            <div className='col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5'>
                                <ul className="list-group">
                                    <li className="list-group-item text-center theme-yellow font-weight-bold theme-brown-font" 
                                        style={{fontSize: 22}}>
                                        Fixed Expenses
                                    </li>
                                    {
                                        (props.fixedExp.length === 0) ? 
                                            <h3 className='col-12 text-center theme-brown-font my-5'>Loading...</h3> 
                                                : props.fixedExp.map((e, i) => {
                                            return(
                                                <li className="list-group-item theme-brown-font" key={i}>
                                                    <div className='col-6' style={{display: 'inline-block', textAlign: 'start'}}>
                                                        {e.name}
                                                    </div>
        
                                                    <div className='col-6' style={{display: 'inline-block', textAlign: 'end'}}>
                                                        ${e.amount}
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
        
                            <div className='col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5'>
                                <ul className="list-group">
                                    <li className="list-group-item text-center theme-yellow font-weight-bold theme-brown-font"
                                        style={{fontSize: 22}}>
                                        Misc Expenses
                                    </li>
                                    {
                                        (props.miscExp.length === 0) ? 
                                            <h3 className='col-12 text-center theme-brown-font my-5'>Loading...</h3> 
                                                : props.miscExp.map((e, i) => {
                                            return(
                                                <li className="list-group-item theme-brown-font" key={i}>
                                                    <div className='col-6' style={{display: 'inline-block', textAlign: 'start'}}>
                                                        {e.name}
                                                    </div>
        
                                                    <div className='col-6' style={{display: 'inline-block', textAlign: 'end'}}>
                                                        ${e.amount}
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
        
                        <div className='row my-3' style={{justifyContent: 'space-evenly'}}>
                            <div className='col-5' style={{textAlign: 'start'}}>
                                <button type="button" name='fixedAdd' value='fixedAdd' className="btn theme-white theme-brown-font theme-brown-border" 
                                    data-toggle="modal" data-target="#exampleModalCenter" onClick={handleAddClick}>Add</button>
                            </div>
        
                            <div className='col-5' style={{textAlign: 'end'}}>
                                <button type="button" name='miscAdd' value='miscAdd' className="btn theme-white theme-brown-font theme-brown-border" 
                                    data-toggle="modal" data-target="#exampleModalCenter" onClick={handleAddClick}>Add</button>
                            </div>
                        </div>
                    </div>
                </>
                :
                    <>
                        <div className='container'>
                            <div className='row' style={{justifyContent: 'space-evenly'}}>
                                <div className='col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5'>
                                    <ul className="list-group">
                                        <li className="list-group-item text-center theme-yellow font-weight-bold theme-brown-font" 
                                            style={{fontSize: 22}}>
                                            Fixed Expenses
                                        </li>
                                        {
                                            (props.fixedExp.length === 0) ? 
                                                <h3 className='col-12 text-center theme-brown-font my-5'>Loading...</h3> 
                                                    : props.fixedExp.map((e, i) => {
                                                return(
                                                    <li className="list-group-item theme-brown-font" key={i}>
                                                        <div className='col-6' style={{display: 'inline-block', textAlign: 'start'}}>
                                                            {e.name}
                                                        </div>

                                                        <div className='col-6' style={{display: 'inline-block', textAlign: 'end'}}>
                                                            ${e.amount}
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>

                                <div className='col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5'>
                                    <ul className="list-group">
                                        <li className="list-group-item text-center theme-yellow font-weight-bold theme-brown-font"
                                            style={{fontSize: 22}}>
                                            Misc Expenses
                                        </li>
                                        {
                                            (props.miscExp.length === 0) ? 
                                                <h3 className='col-12 text-center theme-brown-font my-5'>Loading...</h3> 
                                                    : props.miscExp.map((e, i) => {
                                                return(
                                                    <li className="list-group-item theme-brown-font" key={i}>
                                                        <div className='col-6' style={{display: 'inline-block', textAlign: 'start'}}>
                                                            {e.name}
                                                        </div>

                                                        <div className='col-6' style={{display: 'inline-block', textAlign: 'end'}}>
                                                            ${e.amount}
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </>
    )
}