import React,{useContext} from "react";
import './Part3.css';

import { useForm } from "react-hook-form";

function Part3() {

   
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    
    console.log(data);
    

    
}
  
  return (
    <div className="part__three">
      <h3>Partner Universities</h3>
      <p>
        Kalvi programs are offered with the below top universities of India.
        You’ll be getting your degree from one of these universities depending
        on your choice. You can apply for as many programs as you’d like but
        you’ll have to ensure you satisfy the eligibility criteria for the
        respective partner universities.
      </p>


      <div className="colleges" >
            
                <div className="college_one">
                      <img src="http://placehold.it/150x150"/>
                      <h3>LPU</h3>
                      <p><u>View Eligibility & more</u></p>
                </div>

                <div className="college_two">
                <img src="http://placehold.it/150x150"/>
                      <h3>LPU</h3>
                      <p><u>View Eligibility & more</u></p>
                </div>

                <div className="college_three">
                <img src="http://placehold.it/150x150"/>
                      <h3>LPU</h3>
                      <p><u>View Eligibility & more</u></p>
                </div>

                <div className="college_four">
                <img src="http://placehold.it/150x150"/>
                      <h3>LPU</h3>
                      <p><u>View Eligibility & more</u></p>
                </div>

      </div>


      <h2>Your Choices</h2>
      <p>Indicate by selecting against the program.</p>

        <div className="programs">
          
          <div className="program__left">
                 <h3>program</h3>
          </div>

          <div className="program__right">
                     <h3>select</h3>
          </div>
          <hr/>
        
          
        </div>


      {/* <button onClick={handleSubmit(onSubmit)}>
        <p>SAVE & PROCEED</p>
      </button> */}
    </div>
  );
}

export default Part3;
