import { useContext } from 'react';
import './App.scss';
import Imports from './components/Imports/Imports';
import { Context } from './components/Context/Context';

function App() {
  const { moon } = useContext(Context)

  const body = document.querySelector('body')
  
  if(moon === 'white') {
    body.classList.add('theme-white')
    body.classList.remove('theme-black')
  }
  else {
    body.classList.remove('theme-white')
    body.classList.add('theme-black')
  }

  return (
    <div className="my_container">
      <Imports/>
    </div>
  );
}

export default App;
