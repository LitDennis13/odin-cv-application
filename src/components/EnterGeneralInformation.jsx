/* eslint-disable react/prop-types */
import "../Styles/EnterGeneralInformation.css";

function EnterGeneralInformation({info, setInfo}) {
    function handleFirstName(target,firstNameValue) {
        target.setCustomValidity("");
        setInfo({...info, firstName: firstNameValue});
    }
    function handleLastName(target,lastNameValue) {
        target.setCustomValidity("");
        setInfo({...info, lastName: lastNameValue});
    }
    function handleEmail(target,emailValue) {
        target.setCustomValidity("");
        setInfo({...info, email: emailValue});
    }
    function handlePhone(target,phoneValue) {
        target.setCustomValidity("");
        setInfo({...info, phone: phoneValue});
    }
    
    return <div id="enter-general-information">
        <h2 id="general-information-title">General Information</h2>
        <div id="enter-first-name">
            <label htmlFor="first-name-input"><p id="recommended">*</p>First Name: </label>
            <input type="text" id="first-name-input" value={info.firstName} onChange={event => {handleFirstName(event.target,event.target.value)}} required/>
        </div>

        <div id="enter-last-name">
            <label htmlFor="last-name-input"><p id="recommended">*</p>Last Name: </label>
            <input type="text" id="last-name-input" value={info.lastName} onChange={event => {handleLastName(event.target,event.target.value)}} required/>
        </div>

        <div id="enter-email">
            <label htmlFor="email-input"><p id="recommended">*</p>Email: </label>
            <input type="email" id="email-input" value={info.email} onChange={event => {handleEmail(event.target,event.target.value)}} required/>
        </div>

        <div id="enter-phone-number">
            <label htmlFor="phone-input"><p id="recommended">*</p>Phone Number: </label>
            <input type="tel" id="phone-input" value={info.phone} onChange={event => {handlePhone(event.target,event.target.value)}} required/>
        </div>
        <div id="recommended-text-GI">Fields with <p id="recommended">*</p> are recommended</div>
    </div>
}

export default EnterGeneralInformation;