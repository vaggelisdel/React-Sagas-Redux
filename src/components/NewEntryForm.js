import React, { useState } from 'react';
import { Checkbox, Form, Segment } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

const NewEntryForm = ({addEntry}) => {
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const [isExpense, setIsExpense] = useState(false);

    return (
        <Form unstackable>
            <Form.Group>
                <Form.Input
                    icon={'tags'}
                    width={12}
                    label="Description"
                    placeholder="New shinny thing"
                    onChange={(event) => setDescription(event.target.value)}
                />
                <Form.Input
                    icon={'dollar'}
                    width={4}
                    label="Value"
                    placeholder="100.00"
                    iconPosition='left'
                    onChange={(event) => setValue(event.target.value)}
                />
            </Form.Group>
            <Segment compact>
                <Checkbox 
                toggle 
                label={"Is Expense"}
                checked={isExpense}
                onChange={() => setIsExpense((oldState) => !oldState)}
                />
            </Segment>
            <ButtonSaveOrCancel addEntry={addEntry} description={description} value={value} isExpense={isExpense}/>
        </Form>
    );
};

export default NewEntryForm;