import './App.css';
import Header from './Header';
import TechnicalSkills from './TechnicalSkills';
import RelevantProjects from './RelevantProjects';
function App() {
  return (
    <div id='resume' className="w-75">
      <Header />
      <TechnicalSkills/>
      <RelevantProjects/>
    </div>
  );
}

export default App;
