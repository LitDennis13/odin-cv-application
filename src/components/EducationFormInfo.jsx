/* eslint-disable react/prop-types */
function EducationFormInfo({allInfo, setAllInfo, id}) {

    function removeEducation() {
        let tempEducation = [...allInfo.education];
        tempEducation.splice(id, 1);
        setAllInfo({...allInfo, education: tempEducation});
    }

    const educationRemoveButton = id !== 0 ? <button type="button" id="remove-button-E" onClick={removeEducation}>Remove</button> : <></>;

    function handleSchoolName(target, newSchoolName) {
        target.setCustomValidity("");
        let tempEducation = [...allInfo.education];
        tempEducation[id].schoolName = newSchoolName;
        setAllInfo({...allInfo, education: tempEducation});
    }
    function handleFieldOfStudy(target, newFieldOfStudy) {
        target.setCustomValidity("");
        let tempEducation = [...allInfo.education];
        tempEducation[id].fieldOfStudy = newFieldOfStudy;
        setAllInfo({...allInfo, education: tempEducation});
    }
    function handleStartDate(target, newStartDate) {
        target.setCustomValidity("");
        let tempEducation = [...allInfo.education];
        tempEducation[id].startDate = newStartDate;
        setAllInfo({...allInfo, education: tempEducation});
    }
    function handleEndDate(target, newEndDate) {
        target.setCustomValidity("");
        let tempEducation = [...allInfo.education];
        tempEducation[id].endDate = newEndDate;
        setAllInfo({...allInfo, education: tempEducation});
    }

    return <div id="education-section">
    <h2 id="education-title">Education</h2>
    <div id="enter-school-name">
        <label htmlFor="school-name-input"><p id="recommended">*</p>School Name: </label>
        <input type="text" id="school-name-input" value={allInfo.education[id].schoolName} onChange={(event) => {handleSchoolName(event.target, event.target.value)}} required/>
    </div>

    <div id="enter-field-of-study">
        <label htmlFor="field-of-study-input"><p id="recommended">*</p>Field of Study: </label>
        <input type="text" id="field-of-study-input" value={allInfo.education[id].fieldOfStudy} onChange={(event) => {handleFieldOfStudy(event.target, event.target.value)}} required/>
    </div>

    <div id="enter-start-date">
        <label htmlFor="start-date-input"><p id="recommended">*</p>Start Date: </label>
        <input type="date" id="start-date-input" value={allInfo.education[id].startDate} onChange={(event) => {handleStartDate(event.target, event.target.value)}} required/>
    </div>

    <div id="enter-end-date">
        <label htmlFor="end-date-input"><p id="recommended">*</p>End Date: </label>
        <input type="date" id="end-date-input" value={allInfo.education[id].endDate} onChange={(event) => {handleEndDate(event.target, event.target.value)}} required/>
    </div>
    <div id="recommended-text-E">Fields with <p id="recommended">*</p> are recommended</div>
    {educationRemoveButton}
</div>;
}

export default EducationFormInfo;