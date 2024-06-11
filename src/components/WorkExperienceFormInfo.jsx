/* eslint-disable react/prop-types */

function WorkExperienceFormInfo({allInfo, setAllInfo, id}) {

    function removeWorkExperience() {
        let tempWorkExperience = [...allInfo.workExperience];
        tempWorkExperience.splice(id, 1);
        setAllInfo({...allInfo, workExperience: tempWorkExperience});
    }
    
    function handleCompanyName(target, newCompanyName) {
        target.setCustomValidity("");
        let tempWorkExperience = [...allInfo.workExperience];
        tempWorkExperience[id].companyName = newCompanyName;
        setAllInfo({...allInfo, workExperience: tempWorkExperience});
    }
    function handlePositionTitle(target, newPositionTitle) {
        target.setCustomValidity("");
        let tempWorkExperience = [...allInfo.workExperience];
        tempWorkExperience[id].positionTitle = newPositionTitle;
        setAllInfo({...allInfo, workExperience: tempWorkExperience});
    }
    function handleMainResponsibilities(target, newMainResponsibilities) {
        target.setCustomValidity("");
        let tempWorkExperience = [...allInfo.workExperience];
        tempWorkExperience[id].mainResponsibilities = newMainResponsibilities;
        setAllInfo({...allInfo, workExperience: tempWorkExperience});
    }
    function handleStartDate(target, newStartDate) {
        target.setCustomValidity("");
        let tempWorkExperience = [...allInfo.workExperience];
        tempWorkExperience[id].startDate = newStartDate;
        setAllInfo({...allInfo, workExperience: tempWorkExperience});
    }
    function handleEndDate(target, newEndDate) {
        target.setCustomValidity("");
        let tempWorkExperience = [...allInfo.workExperience];
        tempWorkExperience[id].endDate = newEndDate;
        setAllInfo({...allInfo, workExperience: tempWorkExperience});
    }

    return <div id="work-experience-section">
    <h2 id="work-experience-title">Work Experience</h2>
    <div id="enter-company-name">
        <label htmlFor="company-name-input"><p id="recommended">*</p>Company Name: </label>
        <input type="text" id="company-name-input" value={allInfo.workExperience[id].companyName} onChange={(event) => {handleCompanyName(event.target, event.target.value)}} required/>
    </div>

    <div id="enter-position-title">
        <label htmlFor="position-title-input"><p id="recommended">*</p>Position Title: </label>
        <input type="text" id="position-title-input" value={allInfo.workExperience[id].positionTitle} onChange={(event) => {handlePositionTitle(event.target, event.target.value)}} required/>
    </div>

    <div id="enter-main-responsibilities">
        <label htmlFor="main-responsibilities-input"><p id="recommended">*</p>Main Responsibilities: </label>
        <textarea id="main-responsibilities-input" value={allInfo.workExperience[id].mainResponsibilities} onChange={(event) => {handleMainResponsibilities(event.target, event.target.value)}} required/>
    </div>

    <div id="enter-start-date">
        <label htmlFor="start-date-input"><p id="recommended">*</p>Start Date: </label>
        <input type="date" id="start-date-input" value={allInfo.workExperience[id].startDate} onChange={(event) => {handleStartDate(event.target, event.target.value)}} required/>
    </div>

    <div id="enter-end-date">
        <label htmlFor="end-date-input"><p id="recommended">*</p>End Date: </label>
        <input type="date" id="end-date-input" value={allInfo.workExperience[id].endDate} onChange={(event) => {handleEndDate(event.target, event.target.value)}} required/>
    </div>
    <div id="recommended-text-WE">Fields with <p id="recommended">*</p> are recommended</div>
    <button type="button" id="remove-button-WE" onClick={removeWorkExperience}>Remove</button>
</div>;
}

export default WorkExperienceFormInfo;