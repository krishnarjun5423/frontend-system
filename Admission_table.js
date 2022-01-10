import React,{useContext,useState} from 'react'
import './Admission_table.css'
  import Part1 from './Part1'
 import Part2 from './Part2'
 import Part3 from './Part3'
 import Part4 from './Part4'
 import {useStateValue} from "./StateProvider";
 
  

function Admission_Table() {

      const [step,setStep] = useState(1);
      const [{data},dispatch] = useStateValue();
      function showStep(step) {
            
            switch(step) {
                  case 1:
                        return <Part1 />
                        
                  case 2:
                        return <Part2/>
                  case 3:
                        return <Part3/>
                  case 4:
                        return <Part4/>
                  
            }
      }
    return (
        <div className="admission__table">

                 <div className="admission__tableheader">
                       
                      <div className="part_one">
                      <div>
                      <span>Part 1 </span>
                            <h3>About You</h3>

                      </div>
                            
                      </div>

                      <div className="part_two">
                      <div>
                      <span>Part 2 </span>
                            <h3>Academics & 
                                Achievements</h3>
                      </div>
                            
                      </div>

                      <div className="part_three">

                      <div>
                      <span>Part 3 </span>
                            <h3>Program & university choices</h3>

                      </div>
                            
                      </div>

                      <div className="part_four">

                      <div>

                      <span>Part 4 </span>
                            <h3>KQ Challenges</h3>
                      </div>
                            
                      </div>

                      <div className="part_five">
                            
                            <h3>Review & Submit</h3>
                      </div>

                 </div>

                 <div>
                 
                  
                 {showStep(step)}
                 
                 

      <button onClick={() => {
                setStep((currpage) => currpage + 1);
              }}>
        <p>SAVE & PROCEED</p>
      </button>
                 </div>
            
        </div>
    )
}

export default Admission_Table
