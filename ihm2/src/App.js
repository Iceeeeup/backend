import './App.css';
import Nva from './popup/nva';
import Post from './popup/post';
import Report from './popup/report';
import Accept from './popup/accept';

function App() {
  return (
    <div className="App">
       <Nva/>
       <Post/>
       <Report/>
       <Accept/>
    </div>
  );
}

export default App;
