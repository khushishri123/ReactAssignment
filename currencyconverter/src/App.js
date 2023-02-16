import logo from './logo.svg';
import './App.css';
import UsdToInr from './UsdToInr';
import InrToUsd from './InrToUsd';
import GetRequest from './GetRequest';
import BirthdaySort from './BirthdaySort';
import BirthdaySortByAge from './BirthdaySortByAge';

function App() {
  return (
    <div className="App">
     <h1>Converting 30 USD to INR</h1>
     <UsdToInr value={30}/><br></br>
     <h1>Converting 140 INR to USD</h1>
     <InrToUsd value={140} /><br></br>
     {/* {React Assignment 2 } */}
     <GetRequest /><br></br>
     {/* {Birthday Sort Assignment} */}
     <BirthdaySort /><br>
     </br>
     <BirthdaySortByAge />
    </div>
  );
}

export default App;
