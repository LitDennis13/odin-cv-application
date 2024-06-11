/* eslint-disable react/prop-types */

import "../Styles/displayCV.css";

function DisplayCV({clientInfo, editCV}) {
    return <div id="display-cv">
        <h1 id="cv-title">CV Application</h1>
        <div id="display-application">
            <div id="display-general-information">
                <p id="display-email">{clientInfo.email}</p>
                <p id="display-name">{`${clientInfo.firstName} ${clientInfo.lastName}`}</p>
                <p id="display-phone">{`${clientInfo.phone.substring(0,3)}-${clientInfo.phone.substring(3,6)}-${clientInfo.phone.substring(6,10)}`}</p>
            </div>
            <div id="display-education">
                <h1 id="display-education-title">Education</h1>
                {clientInfo.education.map((edu, index) => {
                    return <div id="educationSpot" key={index}>
                        <p id="education-info">{`${edu.fieldOfStudy} at ${edu.schoolName}`}</p>

                        <p id="education-date">{`From ${edu.startDate} to ${edu.endDate}`}</p>
                        
                    </div>
                })}
            </div>
            <div id="display-work-experience">
                <h1 id="display-work-experience-title">Work Experience</h1>
                {clientInfo.workExperience.map((work, index) => {
                    return <div id="workExperienceSpot" key={index}>
                        
                        <p id="work-experience-info">{`${work.positionTitle} at ${work.companyName}`}</p>

                        <p id="work-experience-main-responsibilities">{`Main Responsibilities: ${work.mainResponsibilities}`}</p>

                        <p id="work-experience-date">{`From ${work.startDate} to ${work.endDate}`}</p>
                    </div>
                })}
            </div>
        </div>
        <button id="edit-button" onClick={editCV}>Edit</button>
    </div>;
}

export default DisplayCV;