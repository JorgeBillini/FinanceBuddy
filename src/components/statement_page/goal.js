import React from 'react';

export default props => {
    console.log(props)
    let allExpenses = null;
    let budget = null;
    let remainder = null
    if (!props.statement || !props.allExp) {
        allExpenses = 0;
        budget = 0;
        remainder = 0;
    } else {
        allExpenses = props.allExp;
        budget = props.statement.budget;
        remainder = budget - allExpenses;
    }

    const percentage = ((allExpenses / budget) * 100).toFixed();

    return(
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-right theme-brown-font'>
                        {
                            (!props.statement) ? <h6>Loading...</h6> :
                                <h6>{props.statement.name}</h6>
                        }
                    </div>
                </div>
                <div className='row text-center'>
                    <div className='col-12 theme-brown-font'>
                        <h1 style={{fontSize: 72}}>GOAL</h1>
                    </div>
                </div>
                
                <div className='row theme-brown-border-b'>
                <div className="col-12 my-4 mb-5">
                    <div className="progress-bar theme-green rounded theme-brown-font" role="progressbar" style={{ width: percentage+'%' }} aria-valuenow={percentage}
                      aria-valuemin="0" aria-valuemax="100">{percentage}%</div>
                </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-6 text-center my-5 theme-brown-font'>
                        {/* {<h1 style={{fontSize: 72}}>${remainder}</h1>} */}
                        <h1>Budget: ${budget}</h1>
                    </div>

                    <div className='col-6 text-center my-5 theme-brown-font'>
                        {/* {<h1 style={{fontSize: 72}}>${remainder}</h1>} */}
                        <h1>Savings: ${remainder}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}