import React, {useState} from  'react';

const Form = (props) => {
    let {firstName} = props;
    let {lastName} = props;
    let {email} = props;
    let {password} = props;
    let {confirmPassword} = props;

    const [getFirstName, setFirstName] = useState("");
    const [getLastName, setLastName] = useState("");
    const [getEmail, setEmail] = useState("");
    const [getPassword, setPassword] = useState("");
    const [getConfirmPassword, setConfirmPassword] = useState("");
    
    return(
        <div>
            <form class="formWrapper">
                <div class="labelInput">
                    <label>First Name</label>
                    <input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)}/>
                </div><br></br>
                <div class="labelInput">
                    <label>Last Name</label>
                    <input type="text" name="lastName" onChange={(e) => setLastName(e.target.value)}/>
                </div><br></br>
                <div class="labelInput">
                    <label>Email</label>
                    <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>
                </div><br></br>
                <div class="labelInput">
                    <label>Password</label>
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                </div><br></br>
                <div class="labelInput">
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
            </form>
            <div>
                <h4>Your Form Data</h4>
                <div class="dataWrapper">
                    <div class="labelData">
                        <p class="pLabel">First Name:</p>
                        <p class="pData">{getFirstName}</p>
                    </div>
                    <div class="labelData">
                        <p class="pLabel">Last Name:</p>
                        <p class="pData">{getLastName}</p>
                    </div>
                    <div class="labelData">
                        <p class="pLabel">Email:</p>
                        <p class="pData">{getEmail}</p>
                    </div>
                    <div class="labelData">
                        <p class="pLabel">Password:</p>
                        <p class="pData">{getPassword}</p>
                    </div>
                    <div class="labelData">
                        <p class="pLabel">Confirm Password:</p>
                        <p class="pData">{getConfirmPassword}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;