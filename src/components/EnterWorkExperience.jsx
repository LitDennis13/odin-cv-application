/* eslint-disable react/prop-types */
import "../Styles/EnterWorkExperience.css";

import WorkExperienceFormInfo from "./WorkExperienceFormInfo";

const addWorkExperienceButtonHTML = 
<button id="add-work-experience-button" type="button">Add Work Experience</button>;

window.addEventListener("load", () => {    
    const addWorkExperienceButton = document.querySelector("#add-work-experience-button");
    const enterWorkExperienceSection = document.querySelector("#enter-work-experience");

    function addExtraWorkExperience() {
        console.log(enterWorkExperienceSection);
    }

    addWorkExperienceButton.addEventListener("click", addExtraWorkExperience);
});


function EnterWorkExperience({info, setInfo}) {
    const workExperience = [...info.workExperience];

    return <div id="enter-work-experience">
        {workExperience.map((_, index) => {
            return <WorkExperienceFormInfo key={index} id={index} allInfo={info} setAllInfo={setInfo}/>;
        })}
        {addWorkExperienceButtonHTML}
    </div>
}

export default EnterWorkExperience;
