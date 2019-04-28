// NPM MODULES
import React, { Component } from "react";
import axios from "axios";

// CSS MODULES
import "./statement_page.css";

// COMPONENTS
import Goal from "../components/statement_page/goal";
import RemainingBalance from "../components/statement_page/remaining_balance";
import ExpenseTables from "../components/statement_page/expense_tables";
import SaveDeleteButtons from "../components/statement_page/save_delete";
import AddExpenseModal from "../components/statement_page/addExpense_modal";

export default class StatementPage extends Component {
  state = {
    loggedIn: null,
    income: 2500,
    goal: 1000,
    fixedExp: [],
    miscExp: [],
    wantsToAddExp: false,
    whereToAdd: "",
    expNameToAdd: null,
    expAmountToAdd: null,
    statement: null
  };

  componentDidMount = () => this.loadStatementData();

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

    this.setState(state => ({
      fixedExp: state.fixedExp.concat(expenses.fixed),
      miscExp: state.miscExp.concat(expenses.other),
      statement
    }));
  };

  addExpense = e => {
    const whereToAdd = e.target.value;
    this.setState(state => ({
      wantsToAddExp: !state.wantsToAddExp,
      whereToAdd
    }));
  };

  toggleModal = e => {
    this.setState(state => ({
      wantsToAddExp: !state.wantsToAddExp
    }));
  };

  renderStatementPage = () => {
    const { wantsToAddExp } = this.state;
    if (wantsToAddExp) {
      return (
        <>
          <AddExpenseModal
            activeModal={wantsToAddExp}
            toggle={this.toggleModal}
          />
          <Goal />
          <RemainingBalance />
          <ExpenseTables
            fixedExp={this.state.fixedExp}
            miscExp={this.state.miscExp}
            addExpense={this.addExpense}
          />
          <SaveDeleteButtons />
        </>
      );
    } else {
      return (
        <>
          <Goal />
          <RemainingBalance />
          <ExpenseTables
            fixedExp={this.state.fixedExp}
            miscExp={this.state.miscExp}
            addExpense={this.addExpense}
          />
          <SaveDeleteButtons />
        </>
      );
    }
  };

  render() {
    return this.renderStatementPage();
  }
}
