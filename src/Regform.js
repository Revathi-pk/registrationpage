import './Regform.css';
import { useState } from 'react';


function Regform(){
    const[firstname,setFirstname]=useState("");
    const[lastname,setLastname]=useState("");
    const[mobilenumber,setMobilenumber]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confirmpassword,setConfirmpassword]=useState("");
    const[dob,setDob]=useState(""); 
    const[gender,setSelectedOption]=useState("");
    const[selectstate,setSelectstate]=useState("");
    const[selectcourse,setSelectcourse]=useState("");
    const[delivarymode,setSelectDelivarymode]=useState("");
    const[comments,setComments]=useState("");
    const[passwordError,setpasswordError]=useState(false);
    

    const handleOptionChange=(event)=>{
        setSelectedOption(event.target.value);
    }

    const handleOption=(event)=>{
        setSelectDelivarymode(event.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
if(password !== confirmpassword){
    setpasswordError(true)
}
else{
    setpasswordError(false)



        console.log("First name "+ firstname);
        console.log("Last name "+ lastname);
        console.log("mobile number "+ mobilenumber);
        console.log("email "+ email);
        console.log("password "+ password);
        console.log("confrim password "+ confirmpassword);
        console.log("dob "+ dob);
        console.log("gender "+ gender);
        console.log("Select state "+ selectstate);
        console.log("course "+ selectcourse);
        console.log("DelivaryMode "+ delivarymode);
        console.log("comments "+ comments);

         alert("your respone updated successfully");


    }
    
    }
    return(
        <>
        <form className='regform' onSubmit={handleSubmit}>
            <fieldset>
                <legend>Personal Iformation</legend>
            <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input type="text" placeholder="enter your name" onChange={(e)=>setFirstname(e.target.value)} 
            value={firstname}  id="firstname" required ></input>
            </div>
<br></br>
            <div className="form-group">
            <label htmlFor="lastname">last Name</label>
            <input type="text" placeholder="enter your name" onChange={(e)=>setLastname(e.target.value)} 
            value={lastname} id="lastname" required ></input>
            </div>

<br></br>

            <div className="form-group">
            <label htmlFor="mobilenumber">Mobile Number</label>
            <input type="number" placeholder="enter your Number" onChange={(e)=>setMobilenumber(e.target.value)} 
            value={mobilenumber} id="modilenumber" required ></input>
            </div>
<br></br>

            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="name" placeholder="enter your mail" onChange={(e)=>setEmail(e.target.value)} 
            value={email} id="email" required ></input>
            </div>
<br></br>

             <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="enter your password" onChange={(e)=>setPassword(e.target.value)} 
            value={password} maxLength={"10"}  id="password" name="password" required ></input>
            </div> 
<br></br>   

             <div className="form-group">
            <label htmlFor="confirmpassword">Confirm Paasword</label>
            <input type="password" placeholder="enter your confirm password" onChange={(e)=>setConfirmpassword(e.target.value)} 
            value={confirmpassword} maxLength={"10"}  id="confirmpassword" name="confrimpassword" required ></input>
            </div>  
<br></br>


            <div className="form-group">
            <label htmlFor="dob">Dob</label>
            <input type="date" onChange={(e)=>setDob(e.target.value)} 
            value={dob} id="dob"  required ></input>
            </div>
<br></br>  

            <div className="form-group1">
            <label htmlFor="gender">Gender</label>
            <input type="radio"value="Male" className="gender" onChange={handleOptionChange} checked={gender==="Male"} ></input><label>Male</label>
            <input type="radio"value="Female" className="gender"onChange={handleOptionChange} checked={gender==="Female"}  ></input><label>Female</label>
            <input type="radio"value="Others" className="gender"onChange={handleOptionChange} checked={gender==="Other"}  ></input><label>Other</label>
            </div> 

<br></br>


            <div className="form-group">
            <label htmlFor="selectstate">Selectstate</label>
        <select   id="selectstate" onChange={(e)=>setSelectstate(e.target.value)} value={selectstate}>
            <option></option>
            <option>maharastra</option>
            <option>karnataka</option>
            <option>tamilnadu</option>
            <option>kerla</option>
            <option>andhra pradesh</option>
        </select>
      
            </div>
            </fieldset>
<br></br>

<fieldset>
    <legend>Course Information</legend>
           <div className="form-group">
           <label htmlFor="selectcourse">SelectCourse</label>
     <select  id="selectcourse" onChange={(e)=>setSelectcourse(e.target.value)} 
            value={selectcourse}>
           <option></option>
           <option>java full stack</option>
           <option>python full stack</option>
           <option>software testing</option>
    
     </select>
           </div>
<br></br>
  
            <div className="form-group1">
            <label htmlFor="deliverymode">Delivary Mode</label>
            <input type="radio" value="Online" className="delivarymode" onChange={handleOption} checked={delivarymode==="Online"}></input><label>Online</label>
            <input type="radio" value="Offline" className="delivarymode" onChange={handleOption} checked={delivarymode==="Offline"}></input><label>Offline</label>
            </div> 
<br></br>

            <div className="form-group">
            <label htmlFor="comments">Comments</label>
            <textarea   id="comments" required onChange={(e)=>setComments(e.target.value)} 
            value={comments}></textarea>
            </div>
            </fieldset>

<br></br>

              {passwordError && <p className="warning">password dosn't match please try again</p>}
              <button type="submit">Register Here</button>

        </form>
        </>
    )
}
export default Regform;