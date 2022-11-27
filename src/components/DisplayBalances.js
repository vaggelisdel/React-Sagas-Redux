import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

const DisplayBalances = () => {
    return (
        <Segment textAlign='center'>
            <Grid columns={2} devided={"true"}>
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance title={"Incoming"} value={"1,045.50"} color={"green"} />
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance title={"Expenses"} value={"653.50"} color={"red"} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
};

export default DisplayBalances;