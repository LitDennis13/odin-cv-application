import './Styles/App.css'

import {useState} from "react";

import EditCV from "./components/EditCV";
import DisplayCV from "./components/DisplayCV";

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
        workExperience: []
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
