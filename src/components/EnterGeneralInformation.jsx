/* eslint-disable react/prop-types */
import "../Styles/EnterGeneralInformation.css";

function EnterGeneralInformation({info, setInfo}) {
    function handleFirstName(firstNameValue) {
        setInfo({...info, firstName: firstNameValue});
    }
    function handleLastName(lastNameValue) {
        setInfo({...info, lastName: lastNameValue});
    }
    function handleEmail(emailValue) {
        setInfo({...info, email: emailValue});
    }
    function handlePhone(phoneValue) {
        setInfo({...info, phone: phoneValue});
    }
    
    return <div id="enter-general-information">
        <h2 id="general-information-title">General Information</h2>
        <div id="enter-first-name">
            <label htmlFor="first-name-input"><p id="required">*</p>First Name: </label>
            <input type="text" id="first-name-input" value={info.firstName} onChange={event => {handleFirstName(event.target.value)}} required/>
        </div>

        <div id="enter-last-name">
            <label htmlFor="last-name-input"><p id="required">*</p>Last Name: </label>
            <input type="text" id="last-name-input" value={info.lastName} onChange={event => {handleLastName(event.target.value)}} required/>
        </div>

        <div id="enter-email">
            <label htmlFor="email-input"><p id="required">*</p>Email: </label>
            <input type="email" id="email-input" value={info.email} onChange={event => {handleEmail(event.target.value)}} required/>
        </div>

        <div id="enter-phone-number">
            <label htmlFor="phone-input"><p id="required">*</p>Phone Number: </label>
            <input type="tel" id="phone-input" value={info.phone} onChange={event => {handlePhone(event.target.value)}} required/>
        </div>
        <div id="required-text-GI">Fields with <p id="required">*</p> are required</div>
    </div>
}

export default EnterGeneralInformation;