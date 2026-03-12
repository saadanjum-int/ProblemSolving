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
import Condition from './components/Conditionalrendering';
import Listandkeys from './components/Listandkeys';
import Forms from './components/Forms';
import LifecycleA from './components/LifecycleA';
import LifecycleB from './components/LifecycleB';
import Fragment from './components/Fragment';
import Table from './components/Table';
import Parent from './components/Parent';
import Refsdemo from './components/Refsdemo';
function App() {
  return (
    <div className="App">
      <LifecycleA />
      <LifecycleB />
       <Forms /> 
       <Fragment />
       <Table />
       <Parent />
       <Refsdemo />      {/* 
      <Listandkeys />
      <Condition/>
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
       */}

    </div>
  );
}


export default App;
