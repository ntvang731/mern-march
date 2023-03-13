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
    const [getFirstNameError, setFirstNameError] = useState("");
    const [getLastNameError, setLastNameError] = useState("");
    const [getEmailError, setEmailError] = useState("");
    const [getPasswordError, setPasswordError] = useState("");
    const [getConfirmPasswordError, setConfirmPasswordError] = useState("");

    //function handleFirstName(e)
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        //Sensei Bonus: Only show the validations if the input is not blank
        //(i.e. you should not see the error message if you have not typed anything in)
        if(e.target.value.length > 0 && e.target.value.length < 2) {
            setFirstNameError("First name must be at least 2 characters");
        } else {
            setFirstNameError("");
        }
    }
    
    const handleLastName = (e) => {
        setLastName(e.target.value);
        //Sensei Bonus: Only show the validations if the input is not blank
        //(i.e. you should not see the error message if you have not typed anything in)
        if(e.target.value.length > 0 && e.target.value.length < 2) {
            setLastNameError("Last name must be at least 2 characters");
        } else {
            setLastNameError("");
        }
    }
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
        //Sensei Bonus: Only show the validations if the input is not blank
        //(i.e. you should not see the error message if you have not typed anything in)
        if(e.target.value.length > 0 && e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters");
        } else {
            setEmailError("");
        }
    }
    
    const handlePassword = (e) => {
        setPassword(e.target.value);
        //Sensei Bonus: Only show the validations if the input is not blank
        //(i.e. you should not see the error message if you have not typed anything in)
        if(e.target.value.length > 0 && e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        //Sensei Bonus: Only show the validations if the input is not blank
        //(i.e. you should not see the error message if you have not typed anything in)
        if(e.target.value.length > 0 && e.target.value.length < 8) {
            setConfirmPasswordError("Confirm password must be at least 8 characters");
        } else if(!(e.target.value === getPassword)) {
            setConfirmPasswordError("Passwords must match");
        } else {
            setConfirmPasswordError("");
        }
    }

    return(
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="formContainer">
                    <div className="labelInput">
                        <label>First Name</label>
                        <input type="text" name="firstName" onChange={handleFirstName}/>
                    </div>
                    <div className="errors">
                        {getFirstNameError ? <p>{getFirstNameError}</p> : ""}
                    </div>
                    <div className="labelInput">
                        <label>Last Name</label>
                        <input type="text" name="lastName" onChange={handleLastName}/>
                    </div>
                    <div className="errors">
                        {getLastNameError ? <p>{getLastNameError}</p> : ""}
                    </div>
                    <div className="labelInput">
                        <label>Email</label>
                        <input type="email" name="email" onChange={handleEmail}/>
                    </div>
                    <div className="errors">
                        {getEmailError ? <p>{getEmailError}</p> : ""}
                    </div>
                    <div className="labelInput">
                        <label>Password</label>
                        <input type="password" name="password" onChange={handlePassword}/>
                    </div>
                    <div className="errors">
                        {getPasswordError ? <p>{getPasswordError}</p> : ""}
                    </div>
                    <div className="labelInput">
                        <label>Confirm Password</label>
                        <input type="password" name="confirmPassword" onChange={handleConfirmPassword}/>
                    </div>
                    <div className="errors">
                        {getConfirmPasswordError ? <p>{getConfirmPasswordError}</p> : ""}
                    </div>
                </div>
            </form>
            <div>
                <h4>Your Form Data</h4>
                <div className="dataWrapper">
                    <div className="labelData">
                        <p className="pLabel">First Name</p>
                        <p className="pData">{getFirstName}</p>
                    </div>
                    <div className="labelData">
                        <p className="pLabel">Last Name</p>
                        <p className="pData">{getLastName}</p>
                    </div>
                    <div className="labelData">
                        <p className="pLabel">Email</p>
                        <p className="pData">{getEmail}</p>
                    </div>
                    <div className="labelData">
                        <p className="pLabel">Password</p>
                        <p className="pData">{getPassword}</p>
                    </div>
                    <div className="labelData">
                        <p className="pLabel">Confirm Password</p>
                        <p className="pData">{getConfirmPassword}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;