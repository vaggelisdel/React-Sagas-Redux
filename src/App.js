import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import MainHeader from './components/MainHeader';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import NewEntryForm from './components/NewEntryForm';
import ModalEdit from './components/ModalEdit';
import { useSelector } from 'react-redux';

const App = () => {
  const [incomesTotal, setIncomesTotal] = useState();
  const [expensesTotal, setExpensesTotal] = useState();
  const [total, setTotal] = useState();
  const [entry, setEntry] = useState();
  const {isOpen, id} = useSelector(state => state.modals);
  const entries = useSelector(state => state.entries);

  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id);
    setEntry(entries[index]);
  }, [isOpen, id])

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += Number(entry.value))
      } else {
        return (totalIncomes += Number(entry.value))
      }
    });
    setTotal(totalIncomes - totalExpenses)
    setIncomesTotal(totalIncomes);
    setExpensesTotal(totalExpenses);
  }, [entries]);


  return (
    <Container>

      <MainHeader title={"Budget"} type={'h1'} />
      <DisplayBalance title={"Your balance"} value={total} size="small" />

      <DisplayBalances incomesTotal={incomesTotal} expensesTotal={expensesTotal} />
      <MainHeader title={"History"} type={'h3'} />

      <EntryLines
        entries={entries}
      />

      <MainHeader title={"Add new transaction"} type={'h3'} />
      <NewEntryForm/>
      
      <ModalEdit
        isOpen={isOpen}
        {...entry}
      />
    </Container>
  );
}

export default App;