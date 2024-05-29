import './Styles/App.css'

// Edit Information Components 
import EnterGeneralInformation from './components/EnterGeneralInformation'
import EnterEducation from './components/EnterEducation'
import EnterWorkExperience from './components/EnterWorkExperience'

function App() {
    return <form id="enter-information-form">
    <h1 id="title">CV Application</h1>
    <EnterGeneralInformation/>
    <EnterEducation/>
    <EnterWorkExperience/>
    <button  type="submit">Test Submit</button>
    </form>
}

export default App
