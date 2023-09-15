import './App.css';
import NavBar from './components/NavBar';
import Name from './components/Name';
import Welcome from './components/Welcome';

function App() {
  return (
    <div>
      <NavBar />
      <Welcome />
      <div>
        <Name />
      </div>
    </div>
  );
}

export default App;
