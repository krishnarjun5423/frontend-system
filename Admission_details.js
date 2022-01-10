import React from 'react'
import './Admission_details.css'

function Admission_details() {
    return (
        <div className="admission__details">
            

            <h2>Welcome,Cheeku!</h2>

            <div className="admission__detailsContent">
                 <div>
                     <h2>Application Number</h2>
                     <h3>KUG202219788655</h3>
                 </div>

                 <div>
                     <h2>Academic Year</h2>
                     <h3>2022-23</h3>
                 </div>

                 <div>
                     <h2>Application status</h2>
                     <h3>Not submitted(1% completed)</h3>
                 </div>

                 <div>
                     <h2>Registered Email</h2>
                     <h3>srikanth@kalvi.degree</h3>
                 </div>

                 <div>
                     <h2>Registered Mobile</h2>
                     <h3>19788655</h3>
                 </div>
            </div>
            <div>
                <h2>Last date to submit application</h2>
                <h3>Last date to submit application</h3>
            </div>
        </div>
    )
}

export default Admission_details
