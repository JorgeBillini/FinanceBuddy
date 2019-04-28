import React from 'react';
import axios from 'axios'
import getStatements from '../services/getstatements';
import StatementCard from '../components/statement_card';
export default class Home extends React.Component {
    constructor(props){ 
        super(props);
        this.state = {
        statements:[{id:1,name:"April 19",created_at:"2019-04-27T20:21:50.004Z",budget:1000, expenses:[
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
        ]},{id:2,name:"April 20",created_at:"2019-04-27T20:21:50.004Z", budget:100, expenses:[]}],
        
        }

    }
    componentDidMount= async(e) =>{
        const userId = 1
        const statements = await getStatements(userId);
        console.log(statements);
        this.setState({statements:statements});

        
    }
    handleDelete = async(e) => {
        console.log(e.target.id)
        const id = e.target.id
        const url = `http://localhost:11235/statement/`;
        const response = await axios.delete(url, {
            data:{id:id}
        })
        const statements = await getStatements(1);
        if(statements.length === 0 || !statements){
            this.setState({statements:false});
        }
        this.setState({statements:statements})
    }
    render(){
        
        return (
            <>
            {   this.state.statements === false ? <h1>No statements to show</h1>:
                this.state.statements.map((e,i)=>{
                    return (<div key={i}>
                    <StatementCard item={e} handleDelete={this.handleDelete} />
                    </div>
                    )
                })
        
                
            }
            </>
        )
    }
}