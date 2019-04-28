import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import calculateBudget from '../services/budgetService';
const StatementCard = props => {
    const containerStyle = { border: "1px solid #50514F", boxShadow: "0.5px black", borderRadius: "5px", paddingLeft: "2rem", paddingRight: "2rem", paddingTop: "1.5rem", paddingBottom: "1.5rem", marginTop: "2rem" };
    const RecentJSX = props.item.expenses.length >= 1 ? <div className="row">
        <div className="col-6 col-xs-6">
            <h5>{props.item.expenses[0].expense_name}</h5>
        </div>
        <div className="col-6 col-xs-6">
            <h5>{props.item.expenses[0].expense_amount}</h5>
        </div>
    </div> : <div className="row"><div className="col-12 col-xs-12"><h1>No recent expenses</h1></div></div>
    return (
        <>
            <div className="container-fluid" style={containerStyle}>
                <div className="row">
                    <div className="col-6 col-xs-6">
                        <Link to={`/statements/${props.item.id}`} style={{ textDecoration: 'none', color: 'black' }}> <h3>{props.item.name} statement</h3></Link>
                        <h5>Created <Moment fromNow>{props.item.created_at}</Moment></h5>

                    </div>
                    <div className="col-6 col-xs-6">
                    <h1 style={{color:'#3BAA6B'}}>{calculateBudget(props.item.expenses,props.item.budget)}%</h1>
                    </div>
                </div>
                <div className="row">
                    <div style={{ marginTop: '1rem' }} className="col-12 col-xs-12">
                        <h4>{props.item.expenses.length < 1 ? "" : "Recent expenses"}</h4>
                    </div>
                </div>
                <hr />
                {RecentJSX}
                <div className="row">
                <div className="col-8 col-xs-8"></div>
                <div className="col-10 col-xs-10"></div>
                <div className="col-2 col-xs-2"><button onClick={props.handleDelete} id={props.item.id} className="btn">🗑️</button></div>
                </div>
            </div>

        </>
    )
}
export default StatementCard;