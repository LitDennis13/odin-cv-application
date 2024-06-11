import './Styles/App.css'

import {useState} from "react";

import EditCV from "./components/EditCV";
import DisplayCV from "./components/DisplayCV";

function App() {
    let [clientInfo, setClientInfo] = useState({
        firstName: "FIRSTNAME",
        lastName: "LASTNAME",
        email: "EMAIL",
        phone: "3062061066",
        education: [
            {
                schoolName: "SCHOOLNAME",
                fieldOfStudy: "FIELDOFSTUDY",
                startDate: "2022-04-04",
                endDate: "2023-05-05"
            },
            {
                schoolName: "SCHOOLNAME",
                fieldOfStudy: "FIELDOFSTUDY",
                startDate: "2022-04-04",
                endDate: "2023-05-05"
            }
        ],
        workExperience: [
            {
                companyName: "COMPANYNAME",
                positionTitle: "POSITIONTITLE",
                mainResponsibilities: "MAINRESPONSIBILTIES",
                startDate: "2032-04-04",
                endDate: "2043-05-05"
            },
            {
                companyName: "COMPANYNAME",
                positionTitle: "POSITIONTITLE",
                mainResponsibilities: "MAINRESPONSIBILTIES",
                startDate: "2032-04-04",
                endDate: "2043-05-05"
            }
        ]
    });

    function handleInformationChange(newInfo) {
        setClientInfo(newInfo);
    }

    let [screen, setScreen] = useState(true);

    function submitCV() {
        console.log(clientInfo);
        setScreen(false);
    }

    function editCV() {
        console.log(clientInfo);

        setScreen(true);
    }
    return <>
        {
        screen ? 
        <EditCV
            clientInfo={clientInfo}
            handleInformationChange={handleInformationChange}
            submitCV={submitCV}
        /> 
        : 
        <DisplayCV
            clientInfo={clientInfo}
            editCV={editCV}
        />
        }
    </>;
}

export default App;
