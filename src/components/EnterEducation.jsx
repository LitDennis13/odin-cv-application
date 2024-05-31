/* eslint-disable react/prop-types */
import "../Styles/EnterEducation.css";

// import { v4 as uuidv4 } from 'uuid';

import EducationFormInfo from "./EducationFormInfo";

const educationObjectTemplate = {
    schoolName: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: ""
};

function EnterEducation({info, setInfo}) {
    const education = [...info.education];

    function addExtraEducation() {
        let tempEducation = [...info.education];
        tempEducation.push({...educationObjectTemplate});
        setInfo({...info, education: tempEducation});
    }

    return <div id="enter-education">
        {education.map((_, index) => {
            return <EducationFormInfo key={index} id={index} allInfo={info} setAllInfo={setInfo}/>;
        })}

        <button id="add-education-button" type="button" onClick={addExtraEducation}>Add Education</button>
    </div>
}

export default EnterEducation;
