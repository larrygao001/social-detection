import React from 'react';
import './searchform.css';

const SearchForm=({handleChange, handleSubmit})=>{
    return(
         <form onSubmit={handleSubmit }>
                <div className="basic-info">
                    <div id="left">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Enter First Name" onChange={e=>handleChange("fname",e)} required/>
                    </div>

                    <div id="center">
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Enter Last Name" onChange={e=>handleChange("lname",e)}/>
                    </div>

                    <div id="right">
                        <label htmlFor="age">Age</label>
                        <input type="number" id="age" name="age" placeholder="Enter Age" min="13" max="100"
                        onChange={e=>handleChange("age",e)}/>
                    </div>

                </div>

                <div className="contact-info">
                    <div id="left">                    
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" placeholder="Enter Email Address" onChange={e=>handleChange("email",e)}/><br/>
                    </div>

                    <div id="center" className="phone-number">
                        <label htmlFor="pnumber">Phone Number</label>
                        <input type="tel" id="pnumber" name="phonenumber" placeholder="888-888-8888" 
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        onChange={e=>handleChange("pnumber",e)}/><br/>
                    </div>

                    <div className="right">
                        <label htmlFor="school">School</label>
                        <input type="text" id="school" name="school" placeholder="Enter School Name" onChange={e=>handleChange("school",e)}/>
                    </div>
                </div>




                <div className="address"> 
                    <div id="left">
                        <label htmlFor="city">City </label>
                        <input type="text" id="city" name="city" placeholder="Enter City Name" onChange={e=>handleChange("city",e)}/>
                    </div>
                    <div className="states">
                        <label htmlFor="States">States </label>
                        <select id="select-states" onChange={e=>handleChange("state",e)}>
                            <option value="AL">AL</option>
                            <option value="AK">AK</option>
                            <option value="AR">AR</option>	
                            <option value="AZ">AZ</option>
                            <option value="CA">CA</option>
                            <option value="CO">CO</option>
                            <option value="CT">CT</option>
                            <option value="DC">DC</option>
                            <option value="DE">DE</option>
                            <option value="FL">FL</option>
                            <option value="GA">GA</option>
                            <option value="HI">HI</option>
                            <option value="IA">IA</option>	
                            <option value="ID">ID</option>
                            <option value="IL">IL</option>
                            <option value="IN">IN</option>
                            <option value="KS">KS</option>
                            <option value="KY">KY</option>
                            <option value="LA">LA</option>
                            <option value="MA">MA</option>
                            <option value="MD">MD</option>
                            <option value="ME">ME</option>
                            <option value="MI">MI</option>
                            <option value="MN">MN</option>
                            <option value="MO">MO</option>	
                            <option value="MS">MS</option>
                            <option value="MT">MT</option>
                            <option value="NC">NC</option>	
                            <option value="NE">NE</option>
                            <option value="NH">NH</option>
                            <option value="NJ">NJ</option>
                            <option value="NM">NM</option>			
                            <option value="NV">NV</option>
                            <option value="NY">NY</option>
                            <option value="ND">ND</option>
                            <option value="OH">OH</option>
                            <option value="OK">OK</option>
                            <option value="OR">OR</option>
                            <option value="PA">PA</option>
                            <option value="RI">RI</option>
                            <option value="SC">SC</option>
                            <option value="SD">SD</option>
                            <option value="TN">TN</option>
                            <option value="TX">TX</option>
                            <option value="UT">UT</option>
                            <option value="VT">VT</option>
                            <option value="VA">VA</option>
                            <option value="WA">WA</option>
                            <option value="WI">WI</option>	
                            <option value="WV">WV</option>
                            <option value="WY">WY</option>
                        </select>		          
                    </div>                
                </div>

                <div id="center" className="keywords">
                        <label htmlFor="keywords">Keywords</label>
                        <input type="text" id="keywords" name="keywords" placeholder="Enter keywords"
                        onChange={e=>handleChange("keywords",e)}/><br/>
                </div>

                <input type="submit" value="Submit" />
            </form>
    )
}

export default SearchForm;