// NPM MODULES
import React, {Component,} from 'react';

// COMPONENTS
import Goal from '../components/statement_page/goal';
import RemainingBalance from '../components/statement_page/remaining_balance';
import ExpenseTables from '../components/statement_page/expense_tables';

export default class StatementPage extends Component {
    state = {

    }

    render () {
        return(
            <>
                <Goal />
                <RemainingBalance />
                <ExpenseTables />
            </>
        )
    }
}
