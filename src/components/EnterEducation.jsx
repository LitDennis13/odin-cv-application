import "../Styles/EnterEducation.css";

function EnterEducation() {
    return <div id="enter-education">
        <h2 id="education-title">Education</h2>
        <div id="enter-school-name">
            <label htmlFor="school-name-input"><p id="required">*</p>School Name: </label>
            <input type="text" id="school-name-input" required/>
        </div>

        <div id="enter-field-of-study">
            <label htmlFor="field-of-study-input"><p id="required">*</p>Field of Study: </label>
            <input type="text" id="field-of-study-input" required/>
        </div>

        <div id="enter-start-date">
            <label htmlFor="start-date-input"><p id="required">*</p>Start Date: </label>
            <input type="date" id="start-date-input" required/>
        </div>

        <div id="enter-end-date">
            <label htmlFor="end-date-input"><p id="required">*</p>End Date: </label>
            <input type="date" id="end-date-input" required/>
        </div>
        <p id="required-text-E">Fields with <p id="required">*</p> are required</p>
    </div>
}

export default EnterEducation;
