import './Styles/App.css'

import {useState} from "react";

import EnterGeneralInformation from './components/EnterGeneralInformation'
import EnterEducation from './components/EnterEducation'
import EnterWorkExperience from './components/EnterWorkExperience'


function App() {
    let [clientInfo, setClientInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        education: [
            {
                schoolName: "",
                fieldOfStudy: "",
                startDate: "",
                endDate: ""
            }
        ],
        workExperience: [
            {
                companyName: "",
                positionTitle: "",
                mainResponsibilities: "",
                startDate: "",
                endDate: "",
            }
        ]
    });
    
    function handleInformationChange(newInfo) {
        setClientInfo(newInfo);
    }

    return <form id="enter-information-form">
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
    <button id="submit-button" type="button">Test Submit</button>
    </form>
}

export default App;
