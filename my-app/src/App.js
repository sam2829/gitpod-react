import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from "./components/FunctionalGreeting";
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import StatefulGreeting from "./components/StatefulGreeting";
import StatefulGreetingWithPrevState from "./components/StatefulGreetingWithPrevState";

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Mike" age="32"/>
      <StatefulGreeting greeting="I'm a stateful greeting component!" name="sam" />
      <StatefulGreetingWithPrevState />
    </div>
  );
}

export default App;
