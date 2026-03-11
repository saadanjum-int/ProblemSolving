import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hi from './components/Hi'
import Jsx from './components/Jsx'
import Createelement from './components/Createelement'
import Props from './components/props'
import Classtate from './components/Classtate';
import Count from './components/count';
import Parent from './components/Parentcomp'
function App() {
  return (
    <div className="App">
      <Parent/>
      <Greet />
      <Count/>
      <Props name="ali" />
        <button>Action </button>
      <Welcome name="propsclass"/>
      <Hi />
      <Jsx />
      <Createelement />
      <Classtate/>

    </div>
  );
}


export default App;
