import React from 'react'
import './App.css';
import Header from './Header'
import Form from './Form'
import Admission_header from './Admission_header'
import Admission_details from './Admission_details'
import Admission_table from './Admission_table'

// import Stepper from './Stepper'

function App() {
  return (
    <div className="App">
    {/* <Header/> */}
    {/* <Form/> */}
    <Admission_header/>
    <Admission_details/>
    <Admission_table/>
    {/* <Stepper/> */}
    </div>
  );
}

export default App;
