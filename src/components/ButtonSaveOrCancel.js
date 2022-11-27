import React from 'react';
import { ButtonGroup, Button } from 'semantic-ui-react';

const ButtonSaveOrCancel = ({addEntry}) => {
    return (
        <ButtonGroup style={{ marginTop: 20 }}>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary onClick={() => addEntry()}>Ok</Button>
        </ButtonGroup>
    );
};

export default ButtonSaveOrCancel;