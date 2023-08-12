import './App.css';

import BackgroundImgDesktop from './assets/images/bg-desktop-dark.jpg';
import TodoContainer from './components/TodoContainer';

function App() {
  return (
    <div className="app_container">
      <div className="app_container-backgroundimg">
        <img src={BackgroundImgDesktop} alt={BackgroundImgDesktop}/>
      </div>
      <TodoContainer/>
    </div>
  );
}

export default App;
