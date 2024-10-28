// import { useState } from "react";
import './App.css';
import Home from './pages/home';
// import Button from './components/button';
// import List from './components/lists';

function App() {
  // const [isActiveFirstItem , setIsActiveFirstItem] = useState(true);
  // const [isActiveSecondItem , setIsActiveSecondItem ] = useState(false);
  // const [isActiveThirdItem , setIsActiveThirdItem ] = useState(true);
  // const [isActiveFourthItem , setIsActiveFourthItem ] = useState(false);

  // const myitems = [
  //   { title: 'item 1', ischecked: isActiveFirstItem},
  //   { title: 'item 2', ischecked: isActiveSecondItem},
  //   { title: 'item 3', ischecked: isActiveThirdItem},
  //   { title: 'item 4', ischecked: isActiveFourthItem }
  // ];

  
  // const reverse = () => {
  //   setIsActiveFirstItem(!isActiveFirstItem); 
  //   setIsActiveSecondItem(!isActiveSecondItem); 
  //   setIsActiveThirdItem(!isActiveThirdItem); 
  //   setIsActiveFourthItem(!isActiveFourthItem); 
  // }

  return (
    <div>
      <Home />
      {/* <Button label="Click Me" onClick={reverse} /> 
      <List items={myitems} /> */}
    </div>
  );
}

export default App;

