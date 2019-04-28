import React from 'react';

export default props => {
    return(
        <>
            <div className='container'>
                <div className='row' style={{justifyContent: 'space-evenly'}}>
                    <div className='col-5'>
                        <ul class="list-group">
                            <li class="list-group-item text-center theme-yellow font-weight-bold" 
                                style={{fontSize: 22}}>
                                Fixed Expenses
                            </li>
                            <li class="list-group-item">Dapibus ac facilisis in</li>
                            <li class="list-group-item">Morbi leo risus</li>
                            <li class="list-group-item">Porta ac consectetur ac</li>
                            <li class="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div>

                    <div className='col-5'>
                        <ul class="list-group">
                            <li class="list-group-item text-center theme-yellow font-weight-bold"
                                style={{fontSize: 22}}>
                                Misc Expenses
                            </li>
                            <li class="list-group-item">Dapibus ac facilisis in</li>
                            <li class="list-group-item">Morbi leo risus</li>
                            <li class="list-group-item">Porta ac consectetur ac</li>
                            <li class="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div>
                </div>

                <div className='row my-3' style={{justifyContent: 'space-evenly'}}>
                    <div className='col-5' style={{textAlign: 'start'}}>
                        <button type="button" class="btn theme-white theme-brown-font theme-brown-border">Add</button>
                    </div>

                    <div className='col-5' style={{textAlign: 'end'}}>
                        <button type="button" class="btn theme-white theme-brown-font theme-brown-border">Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}