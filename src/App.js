import { useState } from "react";
import './App.css';
import Home from './pages/home';
import Button from './components/button';
import List from './components/lists';


function App() {
  const [a, setA] = useState(true);
  const [b,setB] = useState(false);
  const [c,setC] = useState(true);
  const [d,setD] = useState(false);

   const myitems = [
    { title: 'item 1', ischecked: a },
    { title: 'item 2', ischecked: b },
    { title: 'item 3', ischecked: c },
    { title: 'item 4', ischecked: d }
  ]
  return (
    <div>
      <Home />
      <Button label="Click Me" />
      <List items={myitems}/>
    </div>
  );
}

export default App;
