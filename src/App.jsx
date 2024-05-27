import './Styles/App.css'

// Edit Information Components 
import EnterGeneralInformation from './components/EnterGeneralInformation'
import EnterEducation from './components/EnterEducation'

function App() {
    return <form id="enter-information-form">
    <h1 id="title">CV Application</h1>
    <EnterGeneralInformation/>
    <EnterEducation/>
    <button  type="submit">Test Submit</button>
    </form>
}

export default App
