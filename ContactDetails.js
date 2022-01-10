import React from 'react'
import './ContactDetails.css'

function ContactDetails({formData,setFormData}) {
    
    return (
        <div className="contactdetails">
            <div className="contactdetails__top" >

            <div className="contactdetails__topleft">
            <h4>First Name</h4>
            <input type="text"   placeholder="First Name" value={formData.firstname}

onChange={(event)=>setFormData({...formData,firstname:event.target.value})}
/>
            </div>

            
<div className="contactdetails__topright">


<h4>Last Name</h4>
<input type="text"  placeholder="Last Name" value={formData.lastname}

onChange={(event)=>setFormData({...formData,lastname:event.target.value})}/>


</div>

            </div>
         <div className="contactdetails__bottom">

         <h4>Email</h4>
        <input type="email"  placeholder="Enter your email" value={formData.email}

onChange={(event)=>setFormData({...formData,email:event.target.value})}


/><br/>
        
        <h4>Mobile number</h4>
        <input type="text"  placeholder="Enter your Mobile number" value={formData.mobilenumber}

onChange={(event)=>setFormData({...formData,mobilenumber:event.target.value})}


/>

         </div>   
            
        </div>
    )
}

export default ContactDetails
