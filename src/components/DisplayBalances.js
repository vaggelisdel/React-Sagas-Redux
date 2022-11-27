import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

const DisplayBalances = ({incomesTotal, expensesTotal}) => {
    return (
        <Segment textAlign='center'>
            <Grid columns={2} devided={"true"}>
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance title={"Incoming"} value={incomesTotal} color={"green"} />
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance title={"Expenses"} value={expensesTotal} color={"red"} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
};

export default DisplayBalances;