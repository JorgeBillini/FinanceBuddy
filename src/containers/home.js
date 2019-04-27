import React from 'react';

export default class Home extends React.Component {
    constructor(props){ 
        super(props);
        this.state = {
        statements:[{id:1,name:"April 19",created_at:"2019-04-27T20:21:50.004Z", expenses:[
            {
                "statement_id": 1,
                "statement_name": "April 19",
                "statement_created_at": "2019-04-27T20:21:50.004Z",
                "email": "joserodriguez@pursuit.org",
                "first_name": "Jose",
                "last_name": "Rodriguez",
                "expense_name": "Car payment",
                "expense_amount": 500,
                "fixed": true
            },
            {
                "statement_id": 1,
                "statement_name": "April 19",
                "statement_created_at": "2019-04-27T20:21:50.004Z",
                "email": "joserodriguez@pursuit.org",
                "first_name": "Jose",
                "last_name": "Rodriguez",
                "expense_name": "Gas",
                "expense_amount": 50,
                "fixed": false
            }
        ]}],
        
        }

    }
    render(){
        return (
            <>
            {
                this.state.statements.map((e,i)=>{
                    return (<div key={i}>
                    <div className="row">
                    <div className="col-12 col-xs-12">
                    <h3>{e.name}</h3>
                    </div>
                    <div className="row">
                    <div className="col-12 col-xs-12">
                    
                    </div>                   
                     </div>
                    </div>
                    </div>)
                })
        
                
            }
            </>
        )
    }
}