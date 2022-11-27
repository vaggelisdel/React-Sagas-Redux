import React, {useState} from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import MainHeader from './components/MainHeader';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import NewEntryForm from './components/NewEntryForm';

const App = () => {

  const [entries, setEntries] = useState(initialEntries);

  const deleteEntry = (id) => {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  }

  return (
    <Container>

      <MainHeader title={"Budget"} type={'h1'} />
      <DisplayBalance title={"Incoming"} value={"2,550.73"} size="small" />
      <DisplayBalances />

      <EntryLines entries={entries} deleteEntry={deleteEntry}/>

      <MainHeader title={"Add new transaction"} type={'h3'} />
      <NewEntryForm />

    </Container>
  );
}

export default App;

const initialEntries = [
  {
    id: 1,
    description: 'Work income',
    value: '$1000,00',
    isExpense: false
  },
  {
    id: 2,
    description: 'Water bill',
    value: '$20,00',
    isExpense: true
  },
  {
    id: 3,
    description: 'Rent',
    value: '$300',
    isExpense: true
  },
  {
    id: 4,
    description: 'Power bill',
    value: '$50',
    isExpense: true
  }
]
