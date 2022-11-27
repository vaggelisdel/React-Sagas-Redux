import React from 'react';
import { ButtonGroup, Button } from 'semantic-ui-react';

const ButtonSaveOrCancel = () => {
    return (
        <ButtonGroup style={{ marginTop: 20 }}>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary>Ok</Button>
        </ButtonGroup>
    );
};

export default ButtonSaveOrCancel;