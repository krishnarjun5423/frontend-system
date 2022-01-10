import React, { useState } from "react";
import ApplicationFee from "./ApplicationFee";
import ContactDetails from "./ContactDetails";
import Verification from "./Verification";
import "./Form.css";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import PropTypes from "prop-types";
//  import { withStyles } from '@mui/styles';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

function Form() {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobilenumber: "",
    otp_on_email: "",
    otp_on_mobile: "",
  });

  const steps = ["Contact Details", "Verification", "Application fee"];

  const FormTitles = ["Contact Details", "Verification", "Application fee"];

  const PageDisplay = () => {
    if (page === 0) {
      return <ContactDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Verification formData={formData} setFormData={setFormData} />;
    } else {
      return <ApplicationFee />;
    }
  };

  return (
    <div className="top">
      <div className="form__instructions">
        <h3>Register in 3 simple steps to start your application</h3>
        <h4>
          Please read the <u>general eligibility criteria</u> before proceeding
        </h4>
      </div>

      <div className="form">
        <div className="form__container">
          <div className="form__progressbar">
            <Stepper activeStep={page} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>

          <div className="form__header">
            <h2>{FormTitles[page]}</h2>
          </div>

          <div className="form__body">{PageDisplay()}</div>

          <div className="form__footer">
            <button
              onClick={() => {
                setPage((currpage) => currpage + 1);
              }}
            >
              <h4>
                {page === 0
                  ? "Proceed to verification"
                  : page === 1
                  ? "Proceed"
                  : "Pay lNR 999"}
              </h4>
            </button>

            {/* {page ===2?`${<button><h4>CANCEL</h4></button>}`:""} */}
          </div>
        </div>
      </div>

      <div className="form__bottom">
        <h3>Already applied? View/Track your application</h3>
        <h4>Admission FAQS</h4>
      </div>
    </div>
  );
}

export default Form;
