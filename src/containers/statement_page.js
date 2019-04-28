// NPM MODULES
import React, { Component } from "react";
import axios from "axios";

// CSS MODULES
import "./statement_page.css";

// COMPONENTS
import Goal from "../components/statement_page/goal";
import ExpenseTables from "../components/statement_page/expense_tables";
import SaveDeleteButtons from "../components/statement_page/save_delete";
import AddExpenseModal from "../components/statement_page/addExpense_modal";

export default class StatementPage extends Component {
  state = {
    loggedIn: null,
    income: 2500,
    goal: null,
    fixedExp: [],
    miscExp: [],
    wantsToAddExp: false,
    whereToAdd: "",
    expNameToAdd: null,
    expAmountToAdd: null,
    statement: null,
    allExp: 0
  };

  componentDidMount = _ => this.loadStatementData();

  loadStatementData = async () => {
    const { id: statementID } = this.props.match.params;

    const { data: expensesResponse } = await axios.get(
      "http://localhost:11235/expense/all/1/2"
    );
    const { expenses } = expensesResponse;

    const { data: statementResponse } = await axios.get(
      `http://localhost:11235/statement/${statementID}`
    );
    const { data: statement } = statementResponse;

    const { data: goalResponse } = await axios.get(
      `http://localhost:11235/goal/1`
    );
    const { data: goal } = goalResponse;

    let allExp = 0;
    for (let expense of expenses.fixed) {
      allExp += expense.amount;
    }

    for (let expense of expenses.other) {
      allExp += expense.amount;
    }

    this.setState(state => ({
      goal,
      fixedExp: state.fixedExp.concat(expenses.fixed),
      miscExp: state.miscExp.concat(expenses.other),
      statement,
      allExp
    }));
  };

  openExpenseModal = e => {
    const whereToAdd = e.target.value;
    this.setState(state => ({
      wantsToAddExp: !state.wantsToAddExp,
      whereToAdd
    }));
  };

  toggleModal = e =>
    this.setState(state => ({
      wantsToAddExp: !state.wantsToAddExp
    }));

  handleExpenseInfo = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  submitExpense = async e => {
    e.preventDefault();

    const { whereToAdd, expNameToAdd, expAmountToAdd, statement } = this.state;
    let fixed = null;
    whereToAdd === "miscAdd" ? (fixed = "FALSE") : (fixed = "TRUE");

    const expense = {
      fixed,
      amount: expAmountToAdd,
      user_id: 1,
      statement_id: statement.id,
      name: expNameToAdd
    };

    const postExpense = await axios.post("http://localhost:11235/expense", {
      fixed,
      amount: expAmountToAdd,
      user_id: 1,
      statement_id: statement.id,
      name: expNameToAdd
    });

    const newExpenseAmountToAdd = parseInt(expAmountToAdd, 10);
    console.log(newExpenseAmountToAdd);

    if (fixed === "TRUE") {
      this.setState(state => ({
        fixedExp: state.fixedExp.concat(expense),
        wantsToAddExp: !state.wantsToAddExp,
        allExp: (state.allExp += expAmountToAdd)
      }));
    } else {
      this.setState(state => ({
        miscExp: state.miscExp.concat(expense),
        wantsToAddExp: !state.wantsToAddExp,
        allExp: state.allExp + newExpenseAmountToAdd
      }));
    }
  };

  setStatement = async _ => {
    console.log("trying to set");
  };

  deleteStatement = async _ => {
    const { id } = this.state;
    const deleteStatementCall = axios.delete(
      `http://localhost:11235/statement`,
      {
        id
      }
    );
    this.props.history.push("/");
  };

  renderStatementPage = _ => {
    const {
      wantsToAddExp,
      statement,
      goal,
      fixedExp,
      miscExp,
      allExp
    } = this.state;
    if (wantsToAddExp) {
      return (
        <>
          <AddExpenseModal
            activeModal={wantsToAddExp}
            addExpense={this.addExpense}
            toggle={this.toggleModal}
            handleExpenseInfo={this.handleExpenseInfo}
            submitExpense={this.submitExpense}
          />
          <Goal
            statement={statement}
            goal={goal}
            fixedExp={fixedExp}
            miscExp={miscExp}
            allExp={allExp}
          />
          <ExpenseTables
            fixedExp={this.state.fixedExp}
            miscExp={this.state.miscExp}
          />
          <SaveDeleteButtons
            deleteStatement={this.deleteStatement}
            setStatement={this.setStatement}
          />
        </>
      );
    } else {
      return (
        <>
          <Goal
            statement={statement}
            goal={goal}
            fixedExp={fixedExp}
            miscExp={miscExp}
            allExp={allExp}
          />
          <ExpenseTables
            fixedExp={this.state.fixedExp}
            miscExp={this.state.miscExp}
            openExpenseModal={this.openExpenseModal}
            handleExpenseInfo={this.handleExpenseInfo}
          />
          <SaveDeleteButtons
            deleteStatement={this.deleteStatement}
            setStatement={this.setStatement}
          />
        </>
      );
    }
  };

  render() {
    return this.renderStatementPage();
  }
}
