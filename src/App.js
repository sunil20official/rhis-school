import './App.css';

import Header from './layout/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App" style={{border:"3px solid black"}}>
      <Header/>
      <div className="App container-lg" style={{border:"3px solid red"}}>
        <Home/>
      </div>
    </div>
  );
}

export default App;
