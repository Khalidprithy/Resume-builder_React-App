import './App.css';

import Header from './components/Header/Header';
import Actions from './components/Pages/Actions';
import ResumeEditor from './components/Pages/ResumeEditor';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Actions></Actions>
      <ResumeEditor></ResumeEditor>

    </div>
  );
}

export default App;
