/* eslint-disable react/prop-types */
function EducationFormInfo({allInfo, setAllInfo, id}) {

    function handleSchoolName(newSchoolName) {
        let tempEducation = [...allInfo.education];
        tempEducation[id].schoolName = newSchoolName;
        setAllInfo({...allInfo, education: tempEducation});
    }
    function handleFieldOfStudy(newFieldOfStudy) {
        let tempEducation = [...allInfo.education];
        tempEducation[id].fieldOfStudy = newFieldOfStudy;
        setAllInfo({...allInfo, education: tempEducation});
    }
    function handleStartDate(newStartDate) {
        let tempEducation = [...allInfo.education];
        tempEducation[id].startDate = newStartDate;
        setAllInfo({...allInfo, education: tempEducation});
    }
    function handleEndDate(newEndDate) {
        let tempEducation = [...allInfo.education];
        tempEducation[id].endDate = newEndDate;
        setAllInfo({...allInfo, education: tempEducation});
    }

    return <div id="education-section">
    <h2 id="education-title">Education</h2>
    <div id="enter-school-name">
        <label htmlFor="school-name-input"><p id="required">*</p>School Name: </label>
        <input type="text" id="school-name-input" value={allInfo.education[id].schoolName} onChange={(event) => {handleSchoolName(event.target.value)}} required/>
    </div>

    <div id="enter-field-of-study">
        <label htmlFor="field-of-study-input"><p id="required">*</p>Field of Study: </label>
        <input type="text" id="field-of-study-input" value={allInfo.education[id].fieldOfStudy} onChange={(event) => {handleFieldOfStudy(event.target.value)}} required/>
    </div>

    <div id="enter-start-date">
        <label htmlFor="start-date-input"><p id="required">*</p>Start Date: </label>
        <input type="date" id="start-date-input" value={allInfo.education[id].startDate} onChange={(event) => {handleStartDate(event.target.value)}} required/>
    </div>

    <div id="enter-end-date">
        <label htmlFor="end-date-input"><p id="required">*</p>End Date: </label>
        <input type="date" id="end-date-input" value={allInfo.education[id].endDate} onChange={(event) => {handleEndDate(event.target.value)}} required/>
    </div>
    <div id="required-text-E">Fields with <p id="required">*</p> are required</div>
</div>;
}

export default EducationFormInfo;