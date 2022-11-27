import React from 'react';
import { Container } from 'semantic-ui-react';
import EntryLine from './EntryLine';
import MainHeader from './MainHeader';

const EntryLines = ({ entries, deleteEntry }) => {
    return (
        <Container>
            <MainHeader title={"History"} type={'h3'} />
            {entries.map((entry) => (
                <EntryLine
                    key={entry.id}
                   {...entry} 
                   deleteEntry={deleteEntry}
                   />
            ))}
        </Container>
    );
};

export default EntryLines;