/* eslint-disable react/prop-types */

function WorkExperienceFormInfo({allInfo, setAllInfo, id}) {

    function handleCompanyName(newCompanyName) {
        let tempWorkExperience = [...allInfo.workExperience];
        tempWorkExperience[id].companyName = newCompanyName;
        setAllInfo({...allInfo, workExperience: tempWorkExperience});
    }
    function handlePositionTitle(newPositionTitle) {
        let tempWorkExperience = [...allInfo.workExperience];
        tempWorkExperience[id].positionTitle = newPositionTitle;
        setAllInfo({...allInfo, workExperience: tempWorkExperience});
    }
    function handleMainResponsibilities(newMainResponsibilities) {
        let tempWorkExperience = [...allInfo.workExperience];
        tempWorkExperience[id].mainResponsibilities = newMainResponsibilities;
        setAllInfo({...allInfo, workExperience: tempWorkExperience});
    }
    function handleStartDate(newStartDate) {
        let tempWorkExperience = [...allInfo.workExperience];
        tempWorkExperience[id].startDate = newStartDate;
        setAllInfo({...allInfo, workExperience: tempWorkExperience});
    }
    function handleEndDate(newEndDate) {
        let tempWorkExperience = [...allInfo.workExperience];
        tempWorkExperience[id].endDate = newEndDate;
        setAllInfo({...allInfo, workExperience: tempWorkExperience});
    }

    return <div id="work-experience-section">
    <h2 id="work-experience-title">Work Experience</h2>
    <div id="enter-company-name">
        <label htmlFor="company-name-input"><p id="required">*</p>Company Name: </label>
        <input type="text" id="company-name-input" value={allInfo.workExperience[id].companyName} onChange={(event) => {handleCompanyName(event.target.value)}} required/>
    </div>

    <div id="enter-position-title">
        <label htmlFor="position-title-input"><p id="required">*</p>Position Title: </label>
        <input type="text" id="position-title-input" value={allInfo.workExperience[id].positionTitle} onChange={(event) => {handlePositionTitle(event.target.value)}} required/>
    </div>

    <div id="enter-main-responsibilities">
        <label htmlFor="main-responsibilities-input"><p id="required">*</p>Main Responsibilities: </label>
        <textarea id="main-responsibilities-input" value={allInfo.workExperience[id].mainResponsibilities} onChange={(event) => {handleMainResponsibilities(event.target.value)}} required/>
    </div>

    <div id="enter-start-date">
        <label htmlFor="start-date-input"><p id="required">*</p>Start Date: </label>
        <input type="date" id="start-date-input" value={allInfo.workExperience[id].startDate} onChange={(event) => {handleStartDate(event.target.value)}} required/>
    </div>

    <div id="enter-end-date">
        <label htmlFor="end-date-input"><p id="required">*</p>End Date: </label>
        <input type="date" id="end-date-input" value={allInfo.workExperience[id].endDate} onChange={(event) => {handleEndDate(event.target.value)}} required/>
    </div>
    <div id="required-text-E">Fields with <p id="required">*</p> are required</div>
</div>;
}

export default WorkExperienceFormInfo;