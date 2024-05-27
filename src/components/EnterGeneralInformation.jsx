import "../Styles/EnterGeneralInformation.css";

function EnterGeneralInformation() {

    return <div id="enter-general-information">
        <h2 id="general-information-title">General Information</h2>
        <div id="enter-first-name">
            <label htmlFor="first-name-input"><p id="required">*</p>First Name: </label>
            <input type="text" id="first-name-input" required/>
        </div>

        <div id="enter-last-name">
            <label htmlFor="last-name-input"><p id="required">*</p>Last Name: </label>
            <input type="text" id="last-name-input" required/>
        </div>

        <div id="enter-email">
            <label htmlFor="email-input"><p id="required">*</p>Email: </label>
            <input type="email" id="email-input" required/>
        </div>

        <div id="enter-phone-number">
            <label htmlFor="phone-input"><p id="required">*</p>Phone Number: </label>
            <input type="tel" id="phone-input" required/>
        </div>
        <p id="required-text-GI">Fields with <p id="required">*</p> are required</p>
    </div>
}

export default EnterGeneralInformation;