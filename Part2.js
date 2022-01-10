import React,{useContext} from "react";
import {useStateValue} from "./StateProvider";
import "./Part2.css";
import { useForm } from "react-hook-form";


function Part2() {
 
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [{data},dispatch] = useStateValue();
  {console.log(data)}
   
  const onSubmit = (data) => {
    
    const formData = data
  
  dispatch({
      type:'ADD_PART_TWO_DATA_TO_STORE',
      part_two_data:formData
  })

} 

  return (
    <div className="part__two">
      <h3>Class X/High School Details</h3>

      <div className="personal__detailscontainer">
        <div>
          <h3>School Name*</h3>
          <input type="text" {...register("class_ten_school_name",{ required: true, maxLength: 30, pattern: /^[A-Za-z]+$/i })} placeholder="Class X/High School Details" />
          {errors.class_ten_school_name && errors.class_ten_school_name.type === "required" && <span style={{color:"red",padding:"5px",}}>* School Name is required </span>}
        </div>

        <div>
          <h3>Board*</h3>
          <input type="text" {...register("class_ten_board_name",{ required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} placeholder="Board" />
          {errors.class_ten_board_name && errors.class_ten_board_name.type === "required" && <span style={{color:"red",padding:"5px",}}>* Board Name is required </span>}
        </div>

        <div>
          <h3>Year of Passing*</h3>
          <input type="text" {...register("class_ten_year_of_passing",{ required: true,})} placeholder="Year of Passing" />
          {errors.class_ten_year_of_passing && errors.class_ten_year_of_passing.type === "required" && <span style={{color:"red",padding:"5px",}}>* Year of Passing is required </span>}
        </div>

        <div>
          <h3>% Marks*</h3>
          <input type="text" {...register("class_ten_percentage_marks",{ required: true, })} placeholder="% Marks" />
          {errors.class_ten_percentage_marks && errors.class_ten_percentage_marks.type === "required" && <span style={{color:"red",padding:"5px",}}>* Percentage is required </span>}

        </div>
      </div>

      <h3>Class XII/Pre-university Details</h3>

      <div className="personal__detailscontainer">
        <div>
          <h3>School Name*</h3>
          <input type="text" {...register("class_twelve_school_name",{ required: true, })}  placeholder="Class X/High School Details" />
          {errors.class_twelve_school_name && errors.class_twelve_school_name.type === "required" && <span style={{color:"red",padding:"5px",}}>* School Name is required </span>}

        </div>

        <div>
          <h3>Board*</h3>
          <input type="text" {...register("class_twelve_board_name",{ required: true, })} placeholder="Board" />
          {errors.class_twelve_board_name && errors.class_twelve_board_name.type === "required" && <span style={{color:"red",padding:"5px",}}>* Board Name is required </span>}
        </div>

        <div>
          <h3>Year of Passing*</h3>
          <input type="text" {...register("class_twelve_year_of_passing",{ required: true, })} placeholder="Year of Passing" />
          {errors.class_twelve_year_of_passing && errors.class_twelve_year_of_passing.type === "required" && <span style={{color:"red",padding:"5px",}}>* Year of Passing is required </span>}
        </div>

        <div>
          <h3>% Marks*</h3>
          <input type="text" {...register("class_twelve_percentage_marks",{ required: true, })} placeholder="% Marks" />
          {errors.class_twelve_percentage_marks && errors.class_twelve_percentage_marks.type === "required" && <span style={{color:"red",padding:"5px",}}>* Marks is required </span>}
        </div>
      </div>

      <h3>Diploma Details (lf applicable)</h3>

      <div className="personal__detailscontainer">
        <div>
          <h3>School Name*</h3>
          <input type="text" {...register("diploma_school_name",{ required: true, })} placeholder="Class X/High School Details" />
          {errors.diploma_school_name && errors.diploma_school_name.type === "required" && <span style={{color:"red",padding:"5px",}}>* School Name is required </span>}
        </div>

        <div>
          <h3>Board*</h3>
          <input type="text" {...register("diploma_board_name",{ required: true, })} placeholder="Board" />
          {errors.diploma_board_name && errors.diploma_board_name.type === "required" && <span style={{color:"red",padding:"5px",}}>* Board Name is required </span>}

        </div>

        <div>
          <h3>Year of Passing*</h3>
          <input type="text" {...register("diploma_year_of_passing",{ required: true, })} placeholder="Year of Passing" />
          {errors.diploma_year_of_passing && errors.diploma_year_of_passing.type === "required" && <span style={{color:"red",padding:"5px",}}>* Year of Passing is required </span>}

        </div>

        <div>
          <h3>Specialisation*</h3>
          <input type="text" {...register("diploma_specialisation",{ required: true, })} placeholder="Specialisation" />
          {errors.diploma_specialisation && errors.diploma_specialisation.type === "required" && <span style={{color:"red",padding:"5px",}}>* Specialisation is required </span>}
        </div>

        

        <div>
          <h3>% Marks*</h3>
          <input type="text" {...register("diploma_percentage_marks",{ required: true, })} placeholder="% Marks" />
          {errors.diploma_percentage_marks && errors.diploma_percentage_marks.type === "required" && <span style={{color:"red",padding:"5px",}}>* Marks is required </span>}
        </div>
      </div>

      <h3>Academic/Extra curricular achievements</h3>

      <div className="achievements" style={{display:"flex"}}>
        <div>
        
        <h4>Describe the achievement </h4>
          <input type="text" style={{width:"596px",height:"50px"}} {...register("achievement_one",{  })} placeholder="type here" />
          {errors.achievement_one && errors.achievement.one.type === "required" && <span style={{color:"red",padding:"5px",}}>* Emergency contact Name is required </span>}
          </div>
        


        
           <div>
           <h4>Supporting document</h4>
          <input type="file"  style={{width:"400px",height:"50px"}} {...register("achievement_file_one",{})} />
        
                  </div>


                  

        
      </div>

      <div className="achievements" style={{display:"flex"}}>
        <div>
        
        <h4>Describe the achievement </h4>
          <input type="text" style={{width:"596px",height:"50px"}} {...register("achievement_one",{  })} placeholder="type here" />
          {errors.achievement_one && errors.achievement.one.type === "required" && <span style={{color:"red",padding:"5px",}}>* Emergency contact Name is required </span>}
          </div>
        


        
           <div>
           <h4>Supporting document</h4>
          <input type="file"  style={{width:"400px",height:"50px"}} {...register("achievement_file_one",{})} />
        
                  </div>


         {/* <button style={{width:"70px",height:"50px"}}><span style={{background:"#FFFFFF",border:"1px solid #C4C4C4"}}>+ ADD</span></button>          */}

        
      </div>


      {/* <h3>Test Scores</h3> */}

      
      
      {/* <button onClick={handleSubmit(onSubmit)}>
        <p>SAVE & PROCEED</p>
      </button> */}
    </div>
  );
}

export default Part2;
