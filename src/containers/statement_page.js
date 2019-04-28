// NPM MODULES
import React, {Component,} from 'react';

// CSS MODULES
import './statement_page.css';

// COMPONENTS
import Goal from '../components/statement_page/goal';
import RemainingBalance from '../components/statement_page/remaining_balance';
import ExpenseTables from '../components/statement_page/expense_tables';
import SaveDeleteButtons from '../components/statement_page/save_delete';

export default class StatementPage extends Component {
    state = {

    }

    render () {
        return(
            <>
                <Goal />
                <RemainingBalance />
                <ExpenseTables />
                <SaveDeleteButtons />
            </>
        )
    }
}
