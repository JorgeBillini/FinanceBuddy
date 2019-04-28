import React from 'react';
import axios from 'axios'
import getStatements from '../services/getstatements';
import StatementCard from '../components/statement_card';
import AuthContext from '../contexts/auth'
// import addStatementModal from '../components/addStatementModal';
import {Link} from 'react-router-dom';
export default class Home extends React.Component {
    static contextType = AuthContext;
    constructor(props){ 
        super(props);
        this.state = {
        userId:null,
        addingMode:false,
        statement_name:'',
        statement_budget:'',
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
        setTimeout(async () => {
            console.log(this.context, 'context');
            const userId =this.context.user_id ;
            const statements = await getStatements(userId);
            console.log(statements);
            this.setState({statements:statements,userId:userId},()=>{
                console.log(this.state,"after update")
            });
        }, 1000)    
    }

    handleDelete = async(e) => {
        console.log(e.target.id)
        const id = e.target.id
        console.log(e.target.value);
        const url = `http://localhost:11235/statement/`;
        const response = await axios.delete(url, {
            data:{id:id}
        })
    }
    handleAdd = async(e) => {
        this.setState({addingMode:true});
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }
    submitStatement = async(e) => {
        // name, budget, user_id, saved
        const budget = parseInt(this.state.statement_budget)
        const url = `http://localhost:11235/statement/`
        console.log(this.state);
        const response = await axios.post(url,{
            name:this.state.statement_name,
            budget:budget,
            user_id:this.state.userId,
            saved:'TRUE'
        })
        if(response.status === 200){
            const statements = await getStatements(this.state.userId);
            console.log(statements);
            this.setState({statements:statements});
        }
        this.setState({addingMode:false});
    }
    handleCancel = ()=> {
        this.setState({addingMode:false});
    }
    render(){
        const statement_form = <>
        <div className="row">
        <input type="text" className="form-control" name="statement_name" placeholder="enter your statement name,e.g'april 19'" onChange={this.handleChange} />
        </div>
        <div className="row"   style={{marginTop:"2rem",marginBottom:"2rem"}}>
        <input type="text" name="statement_budget" className="form-control" placeholder="enter your budget" onChange={this.handleChange} / >
        </div>
        <button className="btn" onClick={this.submitStatement}>Submit</button>
        <button style={{marginLeft:"2.rem"}}  className="btn" onClick={this.handleCancel} >Cancel </button>
        </>
        return (
            <>
            <AuthContext.Consumer>

            {
                user =>{
                    if (!user.user){
                        return <h1>You're not logged in, log in <Link to="/login">here</Link></h1>
                    }
                    else {
                          return (
                              <>
                              {
                                  this.state.addingMode === true ? statement_form:<>
                                   <div className="row">
                                  <div className="col-6 col-xs-6">
                                    <button  className="btn" onClick={this.handleAdd}> Add Statement</button> 
                                  </div>
                                  <div className="col-6 col-xs-6"></div>
                                  </div>
                                  <div className="container">
                                  { this.state.statements === false ? <h1>No statements to show</h1>:
                                this.state.statements.map((e,i)=>{
                                    return (<div key={i}>
                                    <StatementCard item={e} index={i} handleDelete={this.handleDelete} />
                                    </div>
                                    )
                                })}
                                  
                                  </div> 
                                  </>
                              }
                              

                              </>
                          )
                          
                          
                    
                            
                        
                    }
                }
            }

            </AuthContext.Consumer>

            </>
        )
    }
}