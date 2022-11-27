import React, { Fragment } from 'react';
import { Checkbox, Form, Segment } from 'semantic-ui-react';

const EntryForm = ({description, value, isExpense, setDescription, setValue, setIsExpense}) => {
    return (
        <Fragment>
            <Form.Group>
                <Form.Input
                    icon={'tags'}
                    width={12}
                    label="Description"
                    placeholder="New shinny thing"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <Form.Input
                    icon={'dollar'}
                    width={4}
                    label="Value"
                    placeholder="100.00"
                    value={value}
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
        </Fragment>
    );
};

export default EntryForm;