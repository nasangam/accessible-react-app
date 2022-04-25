import './App.css';
import Labels from './Labels';

function App() {
  return (
    <div className="App">
      <h1>React Accessibility</h1>
      <a href="#content" lang="fr">francais</a>
      <div lang="hr" dir="rtl">Hebrew quote</div>
      <Labels/>
    </div>
  );
}

export default App;
