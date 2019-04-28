import React from 'react';
import {Modal, ModalBody} from 'reactstrap';

export default props => {
    
    const clickHandler = _ => {
        props.toggle();
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
                            <input type='text' name='expNameToAdd' className='rounded col-12' placeholder='Add Expense Name...'/>
                            <input type='text' name='expAmountToAdd' className='rounded col-12 mt-2' placeholder='Add Expense Amount...'/>
                            <div className='col-12 text-right mt-2'>
                                <button type="submit" className="theme-white theme-brown-font theme-brown-border rounded">Post Expense</button>
                            </div>
                        </form>
                    </ModalBody>
                </Modal>
        </div>
        </>
    )
}