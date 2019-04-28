import React from 'react';
import {Modal, ModalBody} from 'reactstrap';
import StatementCard from './statement_card';

export default props => {
    const clickHandler = _ => {
        props.toggle();
    }

    const handleChange = e => {
        props.handleInput(e);
    }

    const addStatement = e => {
        props.handleAdd(e);
    }

    return(
        <>
            <div className='rounded'>
                <Modal isOpen={props.activeModal} toggle={clickHandler} style={{background: '#FDFFF7', border: 'none'}}>
                    <ModalBody className='text-center' style={{marginTop: 'none', paddingTop: 'none'}}>
                            <h4 className='theme-brown-font'>Add Expense</h4>                    
                    </ModalBody>
                    <ModalBody className=''>
                        <form>
                            <input type='text' name='expNameToAdd' className='rounded col-12' 
                                placeholder='Add Expense Name...' onChange={handleChange} />
                            <input type='text' name='expAmountToAdd' className='rounded col-12 mt-2' 
                                placeholder='Add Expense Amount...' onChange={handleChange}/>
                            <div className='col-12 text-right mt-2'>
                                <button type="submit" className="theme-white theme-brown-font theme-brown-border rounded"
                                onClick={submitstatement}>Post Expense</button>
                            </div>
                        </form>
                    </ModalBody>
                </Modal>
        </div>
        </>
    )
}