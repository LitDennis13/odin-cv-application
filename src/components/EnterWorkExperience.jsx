import "../Styles/EnterWorkExperience.css";

function addExtraWorkExperience() {
    console.log("Hello, World!");
}

window.addEventListener("load", () => {    
    const addWorkExperienceButton = document.querySelector("#add-work-experience-button");
    
    addWorkExperienceButton.addEventListener("click", addExtraWorkExperience);
});


function EnterWorkExperience() {
    return <div id="enter-work-experience">
        <div id="work-experience-section">
            <h2 id="work-experience-title">Work Experience</h2>
            <div id="enter-company-name">
                <label htmlFor="company-name-input"><p id="required">*</p>Company Name: </label>
                <input type="text" id="company-name-input" required/>
            </div>

            <div id="enter-position-title">
                <label htmlFor="position-title-input"><p id="required">*</p>Position Title: </label>
                <input type="text" id="position-title-input" required/>
            </div>

            <div id="enter-main-responsibilities">
                <label htmlFor="main-responsibilities-input"><p id="required">*</p>Main Responsibilities: </label>
                <textarea id="main-responsibilities-input" required/>
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
        <button id="add-work-experience-button" type="button">Add Work Experience</button>
    </div>
}

export default EnterWorkExperience;