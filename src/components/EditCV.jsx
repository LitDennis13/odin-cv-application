/* eslint-disable react/prop-types */

import EnterGeneralInformation from './EnterGeneralInformation';
import EnterEducation from './EnterEducation';
import EnterWorkExperience from './EnterWorkExperience';

function EditCV({clientInfo, handleInformationChange, submitCV}) {
    return <form action="/" method="GET" id="enter-information-form">
        <h1 id="title">CV Application</h1>
        <EnterGeneralInformation
        info={clientInfo}
        setInfo={handleInformationChange}
        />
        <EnterEducation
        info={clientInfo}
        setInfo={handleInformationChange}
        />
        <EnterWorkExperience
        info={clientInfo}
        setInfo={handleInformationChange}
        />
        <button id="submit-button" type="button" onClick={submitCV}>Submit</button>
    </form>;
}

export default EditCV;

