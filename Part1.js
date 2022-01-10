import React, { useContext } from "react";
import "./Part1.css";
import { useForm } from "react-hook-form";
 import {useStateValue} from "./StateProvider";
  

function Part1() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [{data},dispatch] = useStateValue();
   
  
  const onSubmit = (data) => {
      const formData = data
    console.log(data);
    FillAddressInput();
    dispatch({
        type:'ADD_PART_ONE_DATA_TO_STORE',
        part_one_data:formData
    })
    
  } 

  

function FillAddressInput()
    { 

       let checkBox= document.getElementById('checkBox');

       let pAddressLine1 = document.getElementById("pAddressLine1");
       let pAddressLine2 = document.getElementById("pAddressLine2");
       let pArea = document.getElementById("pArea");
       let pPin = document.getElementById("pPin");
       let pCity = document.getElementById("pCity");
       let pState = document.getElementById("pState");
       let pCountry = document.getElementById("pCountry");
       let pDistrict = document.getElementById("pDistrict");

       let cAddressLine1 = document.getElementById("cAddressLine1");
       let cAddressLine2 = document.getElementById("cAddressLine2");
       let cArea = document.getElementById("cArea");
       let cDistrict = document.getElementById("cDistrict");
       let cPin = document.getElementById("cPin");
       let cCity = document.getElementById("cCity");
       let cState = document.getElementById("cState");
       let cCountry = document.getElementById("cCountry");
        console.log(pAddressLine1.value)
        if (checkBox.checked == true)
        {
        
       let pAddressLine1Value = pAddressLine1.value;
      
       let pAddressLine2Value = pAddressLine2.value;
       let pAreaValue     = pArea.value;
       let pPinValue      = pPin.value;
       let pCityValue         = pCity.value;
       let pStateValue        = pState.value;
       let pCountryValue      = pCountry.value;
       let pDistrictValue         = pDistrict.value;

       cAddressLine1.value = pAddressLine1Value; 
       cAddressLine2.value = pAddressLine2Value; 
       cArea.value     = pAreaValue;   
       cPin.value      = pPinValue;     
       cCity.value         = pCityValue;     
       cState.value        = pStateValue;       
       cCountry.value      = pCountryValue;      
       cDistrict.value     = pDistrictValue

       }
        else
        {
       cAddressLine1.value = "";
       cAddressLine2.value = ""; 
       cArea.value     = "";     
       cPin.value      = "";     
       cCity.value         = "";         
       cState.value        = "";       
       cCountry.value      = "";   
       cDistrict.value     = "";
      }
    }



  return (
    <div className="part__one">
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Personal Details</h3>

      <div className="personal__detailscontainer">
        <div>
          <h3>First Name *</h3>
          <input
            type="text"
            {...register("first_name", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
            placeholder="First Name"
          />
          {errors.first_name && errors.first_name.type === "required" && (
            <span style={{ color: "red", padding: "5px" }}>
              * First Name is required{" "}
            </span>
          )}
        </div>

        <div>
          <h3>Last Name *</h3>
          <input
            type="text"
            {...register("last_name", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
            placeholder="Last Name"
          />
          {errors.last_name && errors.last_name.type === "required" && (
            <span style={{ color: "red", padding: "5px" }}>
              * Last Name is required{" "}
            </span>
          )}
        </div>

        <div>
          <h3>Father's name *</h3>
          <input
            type="text"
            {...register("father_name", { required: true, maxLength: 20 })}
            placeholder="Father's Name"
          />
          {errors.father_name && errors.father_name.type === "required" && (
            <span style={{ color: "red", padding: "5px" }}>
              * Father Name is required{" "}
            </span>
          )}
        </div>

        <div>
          <h3>Mother's name *</h3>
          <input
            type="text"
            {...register("mother_name", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
            placeholder="Mother's Name"
          />
          {errors.mother_name && errors.mother_name.type === "required" && (
            <span style={{ color: "red", padding: "5px" }}>
              * Mother Name is required{" "}
            </span>
          )}
        </div>

        <div>
          <h3>Date of Birth *</h3>
          <input
            type="text"
            {...register("date_of_birth", { required: true })}
            placeholder="Date of Birth"
          />
          {errors.date_of_birth && errors.father_name.type === "required" && (
            <span style={{ color: "red", padding: "5px" }}>
              * DOB is required{" "}
            </span>
          )}
        </div>

        <div>
          <h3>Aadhar Number *</h3>
          <input
            type="text"
            {...register("aadhar_number", { required: true })}
            placeholder="Aadhar Number"
          />
          {errors.aadhar_number && errors.aadhar_number.type === "required" && (
            <span style={{ color: "red", padding: "5px" }}>
              * Aadhar number is required{" "}
            </span>
          )}
        </div>
        <div>
          <h3>Passport Number </h3>
          <input
            type="text"
            {...register("passport_number", { required: true })}
            placeholder="Passport Number"
          />
          {errors.passport_number &&
            errors.passport_number.type === "required" && (
              <span style={{ color: "red", padding: "5px" }}>
                * Passport number is required{" "}
              </span>
            )}
        </div>
      </div>

      <h3>Communication Address</h3>

      <div className="personal__detailscontainer">
        <div>
          <h3>Address Line 1 *</h3>
          <input
            type="text"
            id="cAddressLine1"
           
            {...register("address_line_one", { required: true })}
            placeholder="Address Line 1"
          />
          {errors.address_line_one &&
            errors.address_line_one.type === "required" && (
              <span style={{ color: "red", padding: "5px" }}>
                * Address Line 1 is required{" "}
              </span>
            )}
        </div>

        <div>
          <h3>Address Line 2 *</h3>
          <input
            type="text"
            id="cAddressLine2"
            {...register("address_line_two", { required: true })}
            placeholder="Address Line 2"
          />
          {errors.address_line_two &&
            errors.address_line_two.type === "required" && (
              <span style={{ color: "red", padding: "5px" }}>
                * Address Line 2 is required{" "}
              </span>
            )}
        </div>

        <div>
          <h3>Area/Locality *</h3>
          <input
            type="text"
            id="cArea"
            {...register("area", { required: true })}
            placeholder="Area/Locality"
          />
          {errors.area && errors.area.type === "required" && (
            <span style={{ color: "red", padding: "5px" }}>
              * Area/Locality is required{" "}
            </span>
          )}
        </div>

        <div>
          <h3>Country *</h3>
          <input
            type="text"
            id="cCountry"
            {...register("country", { required: true })}
            placeholder="Country"
          />
          {errors.country && errors.country.type === "required" && (
            <span style={{ color: "red", padding: "5px" }}>
              * Country is required{" "}
            </span>
          )}
        </div>

        <div>
          <h3>State *</h3>
          <input
            type="text"
            id="cState"
            {...register("state", { required: true })}
            placeholder="State"
          />
          {errors.state && errors.state.type === "required" && (
            <span style={{ color: "red", padding: "5px" }}>
              * State is required{" "}
            </span>
          )}
        </div>

        <div>
          <h3>District *</h3>
          <input
            type="text"
            id="cDistrict"
            {...register("district", { required: true })}
            placeholder="District"
          />
          {errors.district && errors.district.type === "required" && (
            <span style={{ color: "red", padding: "5px" }}>
              * District is required{" "}
            </span>
          )}
        </div>
        <div>
          <h3>City/Town/Village * </h3>
          <input
            type="text"
            id="cCity"
            {...register("city", { required: true })}
            placeholder="City/Town/Village"
          />
          {errors.city && errors.city.type === "required" && (
            <span style={{ color: "red", padding: "5px" }}>
              * City is required{" "}
            </span>
          )}
        </div>

        <div>
          <h3>PIN * </h3>
          <input
            type="text"
            id="cPin"
            {...register("pin", { required: true })}
            placeholder="PIN"
          />
          {errors.pin && errors.pin.type === "required" && (
            <span style={{ color: "red", padding: "5px" }}>
              * PIN is required{" "}
            </span>
          )}
        </div>
      </div>

      <h3>Permanent Address</h3>
       
      <div className="autofill_container" style={{display:"flex"}}>
      <input  style={{height:"20px",width:"20px",margin:"10px"}} type="checkbox"/>
      <h3>Same as communication address </h3>
      </div> 
      

      <div className="personal__detailscontainer">
        <div>
          <h3>Address Line 1 *</h3>
          <input
            type="text"
            id="pAddressLine1"
            value="address_line_one"
            {...register("address_line_one_permanent", { required: false })}
            placeholder="Address Line 1"
          />
          {errors.address_line_one_permanent &&
            errors.address_line_one_permanent.type === "required" && (
              <span style={{ color: "red", padding: "5px" }}>
                * Address Line 1 is required{" "}
              </span>
            )}
        </div>

        <div>
          <h3>Address Line 2 *</h3>
          <input
            type="text"
            id="pAddressLine2"
            {...register("address_line_two_permanent", { required: true })}
            placeholder="Address Line 2"
          />
          {errors.address_line_two_permanent &&
            errors.address_line_two_permanent.type === "required" && (
              <span style={{ color: "red", padding: "5px" }}>
                * Address Line 2 is required{" "}
              </span>
            )}
        </div>

        <div>
          <h3>Area/Locality *</h3>
          <input
            type="text"
            id="pArea"
            {...register("area_permanent", { required: true })}
            placeholder="Area/Locality"
          />
          {errors.area_permanent &&
            errors.area_permanent.type === "required" && (
              <span style={{ color: "red", padding: "5px" }}>
                * Area is required{" "}
              </span>
            )}
        </div>

        <div>
          <h3>Country *</h3>
          <input
            type="text"
            id="pCountry"
            {...register("country_permanent", { required: true })}
            placeholder="Country"
          />
          {errors.country_permanent &&
            errors.country_permanent.type === "required" && (
              <span style={{ color: "red", padding: "5px" }}>
                * Country is required{" "}
              </span>
            )}
        </div>

        <div>
          <h3>State *</h3>
          <input
            type="text"
            id="pState"
            {...register("state_permanent", { required: true })}
            placeholder="State"
          />
          {errors.state_permanent &&
            errors.state_permanent.type === "required" && (
              <span style={{ color: "red", padding: "5px" }}>
                * State is required{" "}
              </span>
            )}
        </div>

        <div>
          <h3>District *</h3>
          <input
            type="text"
            id="pDistrict"
            {...register("district_permanent", { required: true })}
            placeholder="District "
          />
          {errors.district_permanent &&
            errors.district_permanent.type === "required" && (
              <span style={{ color: "red", padding: "5px" }}>
                * District is required{" "}
              </span>
            )}
        </div>
        <div>
          <h3>City/Town/Village * </h3>
          <input
            type="text"
            id="pCity"
            {...register("city_permanent", { required: true })}
            placeholder="City/Town/Village"
          />
          {errors.city_permanent &&
            errors.city_permanent.type === "required" && (
              <span style={{ color: "red", padding: "5px" }}>
                * City is required{" "}
              </span>
            )}
        </div>

        <div>
          <h3>PIN * </h3>
          <input
            type="text"
            id="pPin"
            {...register("pin_permanent", { required: true })}
            placeholder="PIN"
          />
          {errors.pin_permanent && errors.pin_permanent.type === "required" && (
            <span style={{ color: "red", padding: "5px" }}>
              * PIN is required{" "}
            </span>
          )}
        </div>
      </div>

      <h3>Emergency contact </h3>

      <div className="personal__detailscontainer">
        <div>
          <h3>Emergency contact Name *</h3>
          <input
            type="text"
            {...register("emergency_contact_name", { required: true })}
            placeholder="Emergency contact Name"
          />
          {errors.emergency_contact_name &&
            errors.emergency_contact_name.type === "required" && (
              <span style={{ color: "red", padding: "5px" }}>
                * Emergency Contact Name is required{" "}
              </span>
            )}
        </div>

        <div>
          <h3>Emergency contact email *</h3>
          <input
            type="email"
            {...register("emergency_contact_email", { required: true })}
            placeholder="Emergency contact email"
          />
          {errors.emergency_contact_email &&
            errors.emergency_contact_email.type === "required" && (
              <span style={{ color: "red", padding: "5px" }}>
                * Emergency Contact Email is required{" "}
              </span>
            )}
        </div>

        <div>
          <h3>Emergency contact mobile *</h3>
          <input
            type="text"
            {...register("emergency_contact_mobile", { required: true })}
            placeholder="Emergency contact mobile"
          />
          {errors.emergency_contact_mobile &&
            errors.emergency_contact_mobile.type === "required" && (
              <span style={{ color: "red", padding: "5px" }}>
                * Emergency Contact Mobile is required{" "}
              </span>
            )}
        </div>
      </div>

      {/* <h3>Documents Upload </h3> */}

      {/* <div className="personal__detailscontainer">

    <div>
 <h3>Proof of identity *[Select one]</h3>
 <div style={{}}></div>
</div>


<div>
 
 <input type="file" />
</div>

<div>
 <h3> Photograph *</h3>
 <input type="file" />
</div>




    </div> */}

      <h3>How did you hear about Kalvi?</h3>

      <div className="bottom">
        <div>
          <input
            {...register("option_one", {  })}
            type="checkbox"
          />
          <h4>Option 1</h4>
        </div>

        <div>
          <input
            {...register("option_two", {  })}
            type="checkbox"
          />
          <h4>Option 2</h4>
        </div>

        <div>
          <input
            {...register("option_three", { })}
            type="checkbox"
          />
          <h4>Option 3</h4>
        </div>
      </div>

      {/* <button onClick={handleSubmit(onSubmit)}>
        <p>SAVE & PROCEED</p>
      </button> */}
      </form>
    </div>
  );
}

export default Part1;
