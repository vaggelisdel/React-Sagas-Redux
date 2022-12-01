import React from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button } from 'semantic-ui-react';
import { closeEditModal } from '../actions/modals.actions';
import useEntryDetails from '../hooks/useEntryDetails';
import EntryForm from './EntryForm';

const ModalEdit = (
    {
        isOpen,
        description,
        value,
        isExpense,
        id,
        setDescription,
        setValue,
        setIsExpense
    }) => {

    const dispatch = useDispatch();
    const entryUpdate = useEntryDetails(description, value, isExpense);

    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit Entry</Modal.Header>
            <Modal.Content>
                <EntryForm
                    description={entryUpdate.description}
                    value={entryUpdate.value}
                    isExpense={entryUpdate.isExpense}
                    setDescription={entryUpdate.setDescription}
                    setValue={entryUpdate.setValue}
                    setIsExpense={entryUpdate.setIsExpense}
                />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
                <Button onClick={() => dispatch(entryUpdate.updateEntry(id))} primary>Ok</Button>
            </Modal.Actions>
        </Modal>
    );
};

export default ModalEdit;