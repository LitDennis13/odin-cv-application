/* eslint-disable react/prop-types */
import "../Styles/EnterWorkExperience.css";

// import { v4 as uuidv4 } from 'uuid';

import WorkExperienceFormInfo from "./WorkExperienceFormInfo";

const workExperienceObjectTemplate = {
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    startDate: "",
    endDate: "",
};

function EnterWorkExperience({info, setInfo}) {
    const workExperience = [...info.workExperience];

    function addExtraWorkExperience() {
        let tempWorkExperience = [...info.workExperience];
        tempWorkExperience.push({...workExperienceObjectTemplate});
        setInfo({...info, workExperience: tempWorkExperience});
    }

    return <div id="enter-work-experience">
        {workExperience.map((_, index) => {
            return <WorkExperienceFormInfo key={index} id={index} allInfo={info} setAllInfo={setInfo}/>;
        })}
        <button id="add-work-experience-button" type="button" onClick={addExtraWorkExperience}>Add Work Experience</button>
    </div>
}

export default EnterWorkExperience;
