import { Container, Segment, Grid, Icon } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  return (
    <Container>
      
      <MainHeader title={"Budget"} type={'h1'} />
      <DisplayBalance title={"Incoming"} value={"2,550.73"} size="small" />
      <DisplayBalances />

      <MainHeader title={"History"} type={'h3'} />
      <EntryLine description="Something" value="10.00" isExpense/>
      <EntryLine description="Something else" value="25.00" />
      <EntryLine description="Something" value="14.00" isExpense/>

      <MainHeader title={"Add new transaction"} type={'h3'} />
      <NewEntryForm />

    </Container>
  );
}

export default App;
