import React,{useState,createContext} from 'react'
import App from './App';

export const multiStepContext = createContext();

const StepContext = () => {

    const [currentStep,setStep] = useState(1);
    const [userData,setUserData] = useState([]);
    const [finalData,setFinalData] = useState([]);
    return (
        <div>
           <multiStepContext.provider value={{currentStep,setStep,userData,setUserData,finalData,setFinalData}}>
          <App/>
           </multiStepContext.provider> 
        </div>
    )
}

export default StepContext
