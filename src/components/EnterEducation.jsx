/* eslint-disable react/prop-types */
import "../Styles/EnterEducation.css";

import EducationFormInfo from "./EducationFormInfo";

const addEducationButtonHTML = 
<button id="add-education-button" type="button">Add Education</button>;

window.addEventListener("load", () => {    
    const addEducationButton = document.querySelector("#add-education-button");
    const enterEducationSection = document.querySelector("#enter-education");

    
    function addExtraEducation() {
        console.log(enterEducationSection);
    }

    addEducationButton.addEventListener("click", addExtraEducation);
});

function EnterEducation({info, setInfo}) {
    const education = [...info.education];
    return <div id="enter-education">
        {education.map((_, index) => {
            return <EducationFormInfo key={index} id={index} allInfo={info} setAllInfo={setInfo}/>;
        })}
        
        {addEducationButtonHTML}
    </div>
}

export default EnterEducation;
